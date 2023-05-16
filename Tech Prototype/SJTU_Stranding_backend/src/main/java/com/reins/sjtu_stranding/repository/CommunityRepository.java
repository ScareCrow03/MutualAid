package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.Community;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityRepository extends JpaRepository<Community, Integer> {
    Community findCommunityByName(String name);
    Community findCommunityByCommunityId(int communityId);
}