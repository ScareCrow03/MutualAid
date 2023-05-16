package com.reins.sjtu_stranding.daoimpl;

import com.reins.sjtu_stranding.dao.UserDao;
import com.reins.sjtu_stranding.entity.Subscribe;
import com.reins.sjtu_stranding.entity.User;
import com.reins.sjtu_stranding.repository.SubscribeRepository;
import com.reins.sjtu_stranding.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    private UserRepository userInfoRepository;

    @Autowired
    private SubscribeRepository subscribeRepository;
    @Override
    public User getUser(int userId) {
        return userInfoRepository.findUserByUserId(userId);
    }
    @Override
    public User saveUser(int userId, String nickname, String telephone, String email, String address, String avatar, String qq, String description) {
        User u = userInfoRepository.findUserByUserId(userId);
        if (u == null) {
            u = new User();
            u.setUserId(userId);
//            System.out.println(userId);
        }
        u.setNickname(nickname);
        u.setTelephone(telephone);
        u.setEmail(email);
        u.setAddress(address);
        u.setAvatar(avatar);
        u.setQq(qq);
        u.setDescription(description);
        return userInfoRepository.save(u);
    }

    @Override
    public void saveSubscribe(int userId, int communityId, boolean subscribed) {
        if (subscribed) {
            Subscribe x = new Subscribe();
            x.setUserId(userId);
            x.setCommunityId(communityId);
            subscribeRepository.save(x);
        }
        else subscribeRepository.deleteSubscribeByUserIdAndCommunityId(userId, communityId);
    }

    @Override
    public boolean checkUserCommunity(int userId, int communityId) {
        return subscribeRepository.findSubscribeByUserIdAndAndCommunityId(userId, communityId) != null;
    }

}
