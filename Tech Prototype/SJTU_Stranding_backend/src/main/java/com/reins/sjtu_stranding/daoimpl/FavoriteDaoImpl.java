package com.reins.sjtu_stranding.daoimpl;

import com.reins.sjtu_stranding.dao.FavoriteDao;
import com.reins.sjtu_stranding.entity.Favorite;
import com.reins.sjtu_stranding.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FavoriteDaoImpl implements FavoriteDao {
    @Autowired
    private FavoriteRepository favoriteRepository;
    @Override
    public List<Favorite> getFavorite(int userId) {
        return favoriteRepository.findFavoritesByUserId(userId);
    }
    @Override
    public void saveFavorite(int userId, int itemId, boolean favorited) {
        if (!favorited) {
            favoriteRepository.deleteFavoriteByUserIdAndItemId(userId, itemId);
        } else {
            if (favoriteRepository.findFavoritesByUserIdAndItemId(userId, itemId) != null) return;
            Favorite f = new Favorite();
            f.setUserId(userId);
            f.setItemId(itemId);
            favoriteRepository.save(f);
        }
    }
}
