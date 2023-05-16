package com.reins.sjtu_stranding.serviceimpl;

import com.reins.sjtu_stranding.dao.UserAuthDao;
import com.reins.sjtu_stranding.entity.UserAuth;
import com.reins.sjtu_stranding.service.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAuthServiceImpl implements UserAuthService {

    @Autowired
    private UserAuthDao userAuthDao;

    @Override
    public int checkUserAuth(String username, String password){
        return userAuthDao.checkUserAuth(username,password);
    }
    @Override
    public boolean checkUsernameValid(String username) {
        return userAuthDao.checkUsernameValid(username);
    }
    @Override
    public UserAuth saveUserAuth(String username, String password) {
        return userAuthDao.saveUserAuth(username, password);
    }
}
