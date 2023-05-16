package com.reins.sjtu_stranding.daoimpl;

import com.reins.sjtu_stranding.dao.ItemDao;
import com.reins.sjtu_stranding.entity.Item;
import com.reins.sjtu_stranding.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ItemDaoImpl implements ItemDao {
    @Autowired
    private ItemRepository itemRepository;
    @Override
    public List<Item> getItems() {
        return itemRepository.findAll();
    }
    @Override
    public List<Item> getUserItem(int userId) {
        return itemRepository.findItemsByUserId(userId);
    }

    @Override
    public Item saveItem(int itemId, int userId, String name, String image, int number, String description, String tag1, String tag2, String tag3) {
        Item x = (itemId == 0) ? new Item() : itemRepository.findItemByItemId(itemId);
        x.setUserId(userId);
        x.setName(name);
        x.setImage(image);
        x.setNumber(number);
        x.setDescription(description);
        x.setTag1(tag1);
        x.setTag2(tag2);
        x.setTag3(tag3);
        return itemRepository.save(x);
    }

    @Override
    public List<Item> getItemsByX(String x) {
        return itemRepository.findItemsByNameContainingOrTag1ContainingOrTag2ContainingOrTag3Containing(x, x, x, x);
    }

    @Override
    public Item getItem(int itemId) {
        return itemRepository.findItemByItemId(itemId);
    }


}
