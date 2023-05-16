package com.reins.sjtu_stranding.dao;

import com.reins.sjtu_stranding.entity.Order;

import java.util.List;
public interface OrderDao {
    List<Order> getOrder(int userId);
    void saveOrder(int orderId, short state);

    int addOrder(int itemId, int buyer);

    void evaluateOrder(int orderId, double score);
}
