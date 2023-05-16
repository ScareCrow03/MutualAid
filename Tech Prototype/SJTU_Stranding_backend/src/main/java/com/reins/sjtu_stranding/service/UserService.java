package com.reins.sjtu_stranding.service;

import com.reins.sjtu_stranding.entity.User;


public interface UserService {

    User getUser(int userId);
    User saveUser(int userId, String nickname, String telephone, String email, String address, String avatar, String qq, String description);
    void saveSubscribe(int userId, int communityId, boolean subscribed);

    boolean checkUserCommunity(int userId, int communityId);
}
