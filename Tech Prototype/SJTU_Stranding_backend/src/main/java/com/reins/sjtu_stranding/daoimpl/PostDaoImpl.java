package com.reins.sjtu_stranding.daoimpl;

import com.reins.sjtu_stranding.dao.PostDao;
import com.reins.sjtu_stranding.entity.Post;
import com.reins.sjtu_stranding.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Repository
public class PostDaoImpl implements PostDao {
    @Autowired
    private PostRepository postRepository;
    @Override
    public List<Post> getPost(int communityId) {
        return postRepository.findPostsByCommunityId(communityId);
    }
    @Override
    public void savePost(int communityId, int userId, String info) {
        Post x = new Post();
        x.setCommunityId(communityId);
        x.setUserId(userId);
        x.setInfo(info);
        Timestamp ts = new Timestamp(System.currentTimeMillis());
//        System.out.println(ts);
        x.setTime(ts);
        postRepository.save(x);
    }
    @Override
    public void deletePost(int postId) {
        postRepository.deletePostByPostId(postId);
    }
}
