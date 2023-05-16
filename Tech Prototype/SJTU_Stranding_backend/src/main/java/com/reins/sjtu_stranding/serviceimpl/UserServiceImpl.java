package com.reins.sjtu_stranding.serviceimpl;

import com.reins.sjtu_stranding.dao.UserDao;
import com.reins.sjtu_stranding.entity.User;
import com.reins.sjtu_stranding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getUser(int userId){
        return userDao.getUser(userId);
    }

    @Override
    public User saveUser(int userId, String nickname, String telephone, String email, String address, String avatar, String qq, String description) {
        return userDao.saveUser(userId, nickname, telephone, email, address, avatar, qq, description);
    }

    @Override
    public void saveSubscribe(int userId, int communityId, boolean subscribed) {
        userDao.saveSubscribe(userId, communityId, subscribed);
    }

    @Override
    public boolean checkUserCommunity(int userId, int communityId) {
        return userDao.checkUserCommunity(userId, communityId);
    }
}
