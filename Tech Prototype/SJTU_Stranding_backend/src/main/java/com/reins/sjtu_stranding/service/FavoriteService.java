package com.reins.sjtu_stranding.service;

import com.reins.sjtu_stranding.entity.Favorite;

import java.util.List;


public interface FavoriteService {

    List<Favorite> getFavorite(int userId);
    void saveFavorite(int userId, int itemId, boolean favorited);
}
