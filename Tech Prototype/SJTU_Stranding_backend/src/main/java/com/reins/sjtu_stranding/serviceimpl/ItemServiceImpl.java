package com.reins.sjtu_stranding.serviceimpl;

import com.reins.sjtu_stranding.dao.ItemDao;
import com.reins.sjtu_stranding.entity.Item;
import com.reins.sjtu_stranding.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemDao itemDao;
    @Override
    public List<Item> getItems(){
        return itemDao.getItems();
    }
    @Override
    public Item getItem(int itemId){
        return itemDao.getItem(itemId);
    }
    @Override
    public List<Item> getUserItem(int userId){
        return itemDao.getUserItem(userId);
    }

    @Override
    public Item saveItem(int itemId, int userId, String name, String image, int number, String description, String tag1, String tag2, String tag3) {
        return itemDao.saveItem(itemId, userId, name, image, number, description, tag1, tag2, tag3);
    }

    @Override
    public List<Item> getItemsByX(String x) {
        return itemDao.getItemsByX(x);
    }
}
