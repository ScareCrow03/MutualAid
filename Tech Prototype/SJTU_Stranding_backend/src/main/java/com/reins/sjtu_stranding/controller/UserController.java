package com.reins.sjtu_stranding.controller;

import com.reins.sjtu_stranding.entity.User;
import com.reins.sjtu_stranding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/getUser",method = {RequestMethod.GET,RequestMethod.POST})
    public User getUser(@RequestParam("userId") int userId){//RequestParam 通常用于 GET，也可用于其他
        System.out.println("getUser");
        return userService.getUser(userId);
    }

    @RequestMapping(value = "/saveUser", method = {RequestMethod.GET,RequestMethod.POST})
    public User saveUser(@RequestParam("userId") int userId, @RequestParam("nickname") String nickname, @RequestParam("telephone") String telephone, @RequestParam("email") String email, @RequestParam("address") String address, @RequestParam("avatar") String avatar, @RequestParam("qq") String qq, @RequestParam("description") String description) {
        System.out.println("saveUser");
        return userService.saveUser(userId, nickname, telephone, email, address, avatar, qq, description);
    }

    @RequestMapping(value = "/saveSubscribe", method = {RequestMethod.GET,RequestMethod.POST})
    public boolean saveSubscribe(@RequestParam("userId") int userId, @RequestParam("communityId") int communityId, @RequestParam("subscribed") boolean subscribed) {
        System.out.println("saveSubscribe");
        userService.saveSubscribe(userId, communityId, subscribed);
        return true;
    }
    @RequestMapping(value = "/checkUserCommunity", method = {RequestMethod.GET,RequestMethod.POST})
    public boolean checkUserCommunity(@RequestParam("userId") int userId, @RequestParam("communityId") int communityId) {
        System.out.println("checkUserCommunity");
        return userService.checkUserCommunity(userId, communityId);
    }
}
