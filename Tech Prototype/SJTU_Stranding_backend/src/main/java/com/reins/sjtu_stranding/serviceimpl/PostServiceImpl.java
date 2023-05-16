package com.reins.sjtu_stranding.serviceimpl;

import com.reins.sjtu_stranding.dao.PostDao;
import com.reins.sjtu_stranding.entity.Post;
import com.reins.sjtu_stranding.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostDao postDao;

    @Override
    public List<Post> getPost(int communityId){
        return postDao.getPost(communityId);
    }
    @Override
    public void savePost(int communityId, int userId, String info) {
        postDao.savePost(communityId, userId, info);
    }
    @Override
    public void deletePost(int postId) {
        postDao.deletePost(postId);
    }

}
