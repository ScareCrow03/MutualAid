package com.reins.sjtu_stranding.service;

import com.reins.sjtu_stranding.entity.Post;

import java.util.List;


public interface PostService {

    List<Post> getPost(int communityId);
    void savePost(int communityId, int userId, String info);

    void deletePost(int postId);
}
