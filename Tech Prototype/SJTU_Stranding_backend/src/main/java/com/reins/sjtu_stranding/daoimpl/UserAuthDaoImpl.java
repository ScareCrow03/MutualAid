package com.reins.sjtu_stranding.daoimpl;

import com.reins.sjtu_stranding.dao.UserAuthDao;
import com.reins.sjtu_stranding.entity.UserAuth;
import com.reins.sjtu_stranding.repository.UserAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserAuthDaoImpl implements UserAuthDao {

    @Autowired
    UserAuthRepository userAuthRepository;

    @Override
    public int checkUserAuth(String username, String password) {
        UserAuth u = userAuthRepository.findUserAuthByUsernameAndPassword(username,password);
        if (u == null) return -1;
        return u.getUserId();
    }
    @Override
    public boolean checkUsernameValid(String username) {
        return userAuthRepository.findUserAuthByUsername(username) == null;
    }
    @Override
    public UserAuth saveUserAuth(String username, String password) {
        UserAuth u = new UserAuth();
        u.setUsername(username);
        u.setPassword(password);
        return userAuthRepository.save(u);
    }
}
