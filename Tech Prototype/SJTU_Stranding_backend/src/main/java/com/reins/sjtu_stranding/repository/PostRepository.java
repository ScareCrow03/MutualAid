package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {
    List<Post> findPostsByCommunityId(int communityId);
    @Transactional
    void deletePostByPostId(int postId);
}