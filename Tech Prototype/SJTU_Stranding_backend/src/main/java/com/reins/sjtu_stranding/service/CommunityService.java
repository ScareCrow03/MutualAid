package com.reins.sjtu_stranding.service;

import com.reins.sjtu_stranding.entity.Community;

import java.util.List;


public interface CommunityService {

    List<Community> getCommunity();

    boolean addCommunity(String name, String image);

    void saveCommunity(int communityId, String name, String image);
}
