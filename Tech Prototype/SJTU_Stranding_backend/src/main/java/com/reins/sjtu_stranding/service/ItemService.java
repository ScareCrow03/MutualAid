package com.reins.sjtu_stranding.service;

import com.reins.sjtu_stranding.entity.Item;

import java.util.List;


public interface ItemService {
    List<Item> getItems();
    Item getItem(int itemId);
    List<Item> getUserItem(int userId);

    Item saveItem(int itemId, int userId, String name, String image, int number, String description, String tag1, String tag2, String tag3);

    List<Item> getItemsByX(String x);
}