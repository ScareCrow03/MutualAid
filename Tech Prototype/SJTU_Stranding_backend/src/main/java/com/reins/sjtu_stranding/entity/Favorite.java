package com.reins.sjtu_stranding.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Favorite {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "favorite_id")
    private int favoriteId;
    @Basic
    @Column(name = "user_id")
    private int userId;
    @Basic
    @Column(name = "item_id")
    private int itemId;

    @ManyToOne
    @JoinColumn(name = "item_id", insertable=false, updatable=false)
    private Item item;

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public int getFavoriteId() {
        return favoriteId;
    }

    public void setFavoriteId(int favoriteId) {
        this.favoriteId = favoriteId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Favorite favorite = (Favorite) o;
        return favoriteId == favorite.favoriteId && userId == favorite.userId && itemId == favorite.itemId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(favoriteId, userId, itemId);
    }
}
