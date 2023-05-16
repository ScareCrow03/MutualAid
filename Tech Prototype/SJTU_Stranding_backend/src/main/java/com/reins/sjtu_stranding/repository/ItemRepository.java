package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findItemsByUserId(int userId);
    Item findItemByItemId(int itemId);
    List<Item> findItemsByNameContaining(String x);
    List<Item> findItemsByNameContainingOrTag1ContainingOrTag2ContainingOrTag3Containing(String x1, String x2, String x3, String x4);
}