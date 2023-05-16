package com.reins.sjtu_stranding.dao;

import com.reins.sjtu_stranding.entity.UserAuth;

public interface UserAuthDao {

    int checkUserAuth(String username, String password);
    boolean checkUsernameValid(String username);
    UserAuth saveUserAuth(String username, String password);
}
