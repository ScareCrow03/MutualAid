package com.reins.sjtu_stranding.daoimpl;

import com.reins.sjtu_stranding.dao.CommunityDao;
import com.reins.sjtu_stranding.entity.Community;
import com.reins.sjtu_stranding.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CommunityDaoImpl implements CommunityDao {
    @Autowired
    private CommunityRepository communityRepository;
    @Override
    public List<Community> getCommunity() {
        return communityRepository.findAll();
    }

    @Override
    public boolean addCommunity(String name, String image) {
        Community c = communityRepository.findCommunityByName(name);
        if (c == null) {
            c = new Community();
            c.setName(name);
            c.setImage(image);
            communityRepository.save(c);
            return true;
        }
        return false;
    }

    @Override
    public void saveCommunity(int communityId, String name, String image) {
        Community c = communityRepository.findCommunityByCommunityId(communityId);
        c.setName(name);
        c.setImage(image);
        communityRepository.save(c);
    }

}
