package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAuthRepository extends JpaRepository<UserAuth, Integer> {
    UserAuth findUserAuthByUsernameAndPassword(String username, String password);
    UserAuth findUserAuthByUsername(String username);
}