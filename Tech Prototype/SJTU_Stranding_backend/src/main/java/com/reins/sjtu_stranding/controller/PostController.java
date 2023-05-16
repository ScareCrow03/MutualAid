package com.reins.sjtu_stranding.controller;
import com.reins.sjtu_stranding.entity.Post;
import com.reins.sjtu_stranding.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;

    @RequestMapping(value = "/getPost",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Post> getPost(@RequestParam("communityId") int communityId) {
        System.out.println("getPost");
        return postService.getPost(communityId);
    }

    @RequestMapping(value = "/savePost",method = {RequestMethod.GET,RequestMethod.POST})
    public boolean savePost(@RequestParam("communityId") int communityId, @RequestParam("userId") int userId, @RequestParam("info") String info) {
        System.out.println("savePost");
        postService.savePost(communityId, userId, info);
        return true;
    }
    @RequestMapping(value = "/deletePost",method = {RequestMethod.GET,RequestMethod.POST})
    public boolean deletePost(@RequestParam("postId") int postId) {
        System.out.println("deletePost");
        postService.deletePost(postId);
        return true;
    }
}
