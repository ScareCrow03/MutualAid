package com.reins.sjtu_stranding.serviceimpl;

import com.reins.sjtu_stranding.dao.FavoriteDao;
import com.reins.sjtu_stranding.entity.Favorite;
import com.reins.sjtu_stranding.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteDao favoriteDao;

    @Override
    public List<Favorite> getFavorite(int userId){
        return favoriteDao.getFavorite(userId);
    }
    @Override
    public void saveFavorite(int userId, int itemId, boolean favorited) {
        favoriteDao.saveFavorite(userId, itemId, favorited);
    }
}
