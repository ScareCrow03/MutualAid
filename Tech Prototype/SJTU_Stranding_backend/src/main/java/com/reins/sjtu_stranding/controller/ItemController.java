package com.reins.sjtu_stranding.controller;
import com.reins.sjtu_stranding.entity.Item;
import com.reins.sjtu_stranding.repository.ItemRepository;
import com.reins.sjtu_stranding.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ItemController {

    @Autowired
    private ItemService itemService;

    @RequestMapping(value = "/getItems",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Item> getItems() {
        System.out.println("getItems");
        return itemService.getItems();
    }

    @RequestMapping(value = "/getUserItem",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Item> getUserItem(@RequestParam("userId") int userId) {
        System.out.println("getUserItem");
        return itemService.getUserItem(userId);
    }

    @RequestMapping(value = "/getItem",method = {RequestMethod.GET,RequestMethod.POST})
    public Item getItem(@RequestParam("itemId") int itemId) {
        System.out.println("getItem");
        return itemService.getItem(itemId);
    }

    @RequestMapping(value = "/saveItem",method = {RequestMethod.GET,RequestMethod.POST})
    public Item saveItem(@RequestParam("itemId") int itemId, @RequestParam("userId") int userId, @RequestParam("name") String name, @RequestParam("image") String image, @RequestParam("number") int number, @RequestParam("description") String description, @RequestParam("tag1") String tag1, @RequestParam("tag2") String tag2, @RequestParam("tag3") String tag3) {
        //itemId=0表示新建，否则表示修改
        System.out.println("saveItem");
        return itemService.saveItem(itemId, userId, name, image, number, description, tag1, tag2, tag3);
    }

    @Autowired
    ItemRepository itemRepository;
    @RequestMapping(value = "/getItemsByX",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Item> getItemsByX(@RequestParam("x") String x) {
        System.out.println("getItemsByX");
        return itemService.getItemsByX(x);
    }
}
