package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.Subscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface SubscribeRepository extends JpaRepository<Subscribe, Integer> {
    @Transactional
    void deleteSubscribeByUserIdAndCommunityId(int userId, int communityId);
    Subscribe findSubscribeByUserIdAndAndCommunityId(int userId, int communityId);
}