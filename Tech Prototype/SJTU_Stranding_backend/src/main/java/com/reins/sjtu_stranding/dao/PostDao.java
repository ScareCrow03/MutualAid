package com.reins.sjtu_stranding.dao;

import com.reins.sjtu_stranding.entity.Post;

import java.beans.Transient;
import java.util.List;

public interface PostDao {
    List<Post> getPost(int communityId);
    void savePost(int communityId, int userId, String info);
    void deletePost(int postId);
}
