package com.reins.sjtu_stranding.serviceimpl;

import com.reins.sjtu_stranding.dao.OrderDao;
import com.reins.sjtu_stranding.entity.Order;
import com.reins.sjtu_stranding.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Override
    public List<Order> getOrder(int UserId){
        return orderDao.getOrder(UserId);
    }

    @Override
    public void saveOrder(int orderId, short state) {
        orderDao.saveOrder(orderId, state);
    }

    @Override
    public int addOrder(int itemId, int buyer) {
        return orderDao.addOrder(itemId, buyer);
    }

    @Override
    public void evaluateOrder(int orderId, double score) {
        orderDao.evaluateOrder(orderId, score);
    }
}
