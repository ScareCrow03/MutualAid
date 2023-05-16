package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findUserByUserId(int userId);
}