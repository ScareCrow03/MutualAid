package com.reins.sjtu_stranding.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Subscribe {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "subscribe_id")
    private int subscribeId;
    @Basic
    @Column(name = "user_id")
    private int userId;
    @Basic
    @Column(name = "community_id")
    private int communityId;

    public int getSubscribeId() {
        return subscribeId;
    }

    public void setSubscribeId(int subscribeId) {
        this.subscribeId = subscribeId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getCommunityId() {
        return communityId;
    }

    public void setCommunityId(int communityId) {
        this.communityId = communityId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subscribe subscribe = (Subscribe) o;
        return subscribeId == subscribe.subscribeId && userId == subscribe.userId && communityId == subscribe.communityId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(subscribeId, userId, communityId);
    }
}
