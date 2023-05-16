package com.reins.sjtu_stranding.controller;
import com.reins.sjtu_stranding.entity.Favorite;
import com.reins.sjtu_stranding.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @RequestMapping(value = "/getFavorite",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Favorite> getFavorite(@RequestParam("userId") int userId) {
        System.out.println("getFavorite");
        return favoriteService.getFavorite(userId);
    }
    @RequestMapping(value = "/saveFavorite",method = {RequestMethod.GET,RequestMethod.POST})
    public boolean saveFavorite(@RequestParam("userId") int userId, @RequestParam("itemId") int itemId, @RequestParam("favorited") boolean favorited) {
        System.out.println("saveFavorite");
        favoriteService.saveFavorite(userId, itemId, favorited);
        return true;
    }
}
