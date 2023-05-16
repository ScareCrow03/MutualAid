package com.reins.sjtu_stranding.controller;
import com.reins.sjtu_stranding.entity.Community;
import com.reins.sjtu_stranding.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CommunityController {

    @Autowired
    private CommunityService communityService;

    @RequestMapping(value = "/getCommunity",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Community> getCommunity() {
        System.out.println("getCommunity");
        return communityService.getCommunity();
    }

    @RequestMapping(value = "/addCommunity",method = {RequestMethod.GET,RequestMethod.POST})
    public boolean addCommunity(@RequestParam("name") String name, @RequestParam("image") String image) {
        System.out.println("addCommunity");
        return communityService.addCommunity(name, image);
    }

    @RequestMapping(value = "/saveCommunity",method = {RequestMethod.GET,RequestMethod.POST})
    public boolean saveCommunity(@RequestParam("communityId") int communityId, @RequestParam("name") String name, @RequestParam("image") String image) {
        System.out.println("saveCommunity");
        communityService.saveCommunity(communityId, name, image);
        return true;
    }
}
