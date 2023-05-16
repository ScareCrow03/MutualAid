package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findOrdersByUserId(int userId);
    List<Order> findOrdersByUserIdOrBuyer(int userId, int buyer);
    Order findOrderByOrderId(int orderId);

    List<Order> findOrdersByItemId(int itemId);
}