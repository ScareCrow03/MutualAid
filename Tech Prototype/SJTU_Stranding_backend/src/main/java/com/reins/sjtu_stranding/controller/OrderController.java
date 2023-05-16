package com.reins.sjtu_stranding.controller;
import com.reins.sjtu_stranding.entity.Order;
import com.reins.sjtu_stranding.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/getOrder",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Order> getOrder(@RequestParam("userId") int userId) {
        System.out.println("getOrder");
        return orderService.getOrder(userId);
    }
    @RequestMapping(value = "/addOrder",method = {RequestMethod.GET,RequestMethod.POST})
    public int addOrder(@RequestParam("itemId") int itemId, @RequestParam("buyer") int buyer) {
        System.out.println("addOrder");
        return orderService.addOrder(itemId, buyer);
    }
    @RequestMapping(value = "/saveOrder",method = {RequestMethod.GET,RequestMethod.POST})
    public boolean saveOrder(@RequestParam("orderId") int orderId, @RequestParam("state") short state) {
        System.out.println("saveOrder");
        orderService.saveOrder(orderId, state);
        return true;
    }
    @RequestMapping(value = "/evaluateOrder",method = {RequestMethod.GET,RequestMethod.POST})
    public boolean evaluateOrder(@RequestParam("orderId") int orderId, @RequestParam("score") double score) {
        System.out.println("evaluateOrder");
        orderService.evaluateOrder(orderId, score);
        return true;
    }
}
