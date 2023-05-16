package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {
    List<Favorite> findFavoritesByUserId(int userId);
    @Transactional
    void deleteFavoriteByUserIdAndItemId(int userId, int itemId);
    Favorite findFavoritesByUserIdAndItemId(int userId, int itemId);
}