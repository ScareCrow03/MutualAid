package com.reins.sjtu_stranding.serviceimpl;

import com.reins.sjtu_stranding.dao.CommunityDao;
import com.reins.sjtu_stranding.entity.Community;
import com.reins.sjtu_stranding.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunityServiceImpl implements CommunityService {

    @Autowired
    private CommunityDao communityDao;

    @Override
    public List<Community> getCommunity(){
        return communityDao.getCommunity();
    }

    @Override
    public boolean addCommunity(String name, String image) {
        return communityDao.addCommunity(name, image);
    }

    @Override
    public void saveCommunity(int communityId, String name, String image) {
        communityDao.saveCommunity(communityId, name, image);
    }
}
