package com.reins.sjtu_stranding.service;

import com.reins.sjtu_stranding.entity.UserAuth;


public interface UserAuthService {

    int checkUserAuth(String username, String password);
    boolean checkUsernameValid(String username);
    UserAuth saveUserAuth(String username, String password);
}
