package com.reins.sjtu_stranding.daoimpl;

import com.reins.sjtu_stranding.dao.OrderDao;
import com.reins.sjtu_stranding.entity.Item;
import com.reins.sjtu_stranding.entity.Order;
import com.reins.sjtu_stranding.entity.User;
import com.reins.sjtu_stranding.repository.ItemRepository;
import com.reins.sjtu_stranding.repository.OrderRepository;
import com.reins.sjtu_stranding.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ItemRepository itemRepository;
    @Override
    public List<Order> getOrder(int userId) {
        return orderRepository.findOrdersByUserIdOrBuyer(userId, userId);
    }

    @Override
    public void saveOrder(int orderId, short state) {
        Order o = orderRepository.findOrderByOrderId(orderId);
        o.setState(state);
        if (state == 1) {
            int itemId = o.getItemId();
            List<Order> l = orderRepository.findOrdersByItemId(itemId);
            for (Order x:l) if (x.getState() == 0) {//if going
                x.setState((short) 2);//refuse
                orderRepository.save(x);
            }
            Item i = itemRepository.findItemByItemId(itemId);
            i.setState((short) 1);//complete
            itemRepository.save(i);
        } else {
            o.setState(state);
            orderRepository.save(o);
        }
    }

    @Override
    public int addOrder(int itemId, int buyer) {
        Item i = itemRepository.findItemByItemId(itemId);
        if (i.getState() == 1) return -1;
        Order o = new Order();
        o.setItemId(itemId);
        o.setBuyer(buyer);
        o.setState((short) 0);
        o.setScore(0.0);
        Timestamp ts = new Timestamp(System.currentTimeMillis());
        o.setTime(ts);
        o.setUserId(i.getUserId());
        orderRepository.save(o);
        return 0;
    }

    @Autowired
    UserRepository userRepository;
    @Override
    public void evaluateOrder(int orderId, double score) {
        Order o = orderRepository.findOrderByOrderId(orderId);
        User u = userRepository.findUserByUserId(o.getUserId());
        double d = o.getScore();
        if (d != 0) {
            u.setSumScore(u.getSumScore() - d);
        } else u.setNumber(u.getNumber() + 1);
        d = score;
        o.setScore(score);
        u.setSumScore(u.getSumScore() + d);
        u.setScore(u.getSumScore() / u.getNumber());
        orderRepository.save(o);
        userRepository.save(u);
    }

}
