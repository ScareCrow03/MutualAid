package com.reins.sjtu_stranding.dao;

import com.reins.sjtu_stranding.entity.Item;

import java.util.List;
public interface ItemDao {
    List<Item> getItems();
    Item getItem(int ItemId);
    List<Item> getUserItem(int userId);

    Item saveItem(int itemId, int userId, String name, String image, int number, String description, String tag1, String tag2, String tag3);

    List<Item> getItemsByX(String x);
}
