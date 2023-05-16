package com.reins.sjtu_stranding.controller;

import com.reins.sjtu_stranding.entity.UserAuth;
import com.reins.sjtu_stranding.service.UserAuthService;
import com.reins.sjtu_stranding.utils.msgutils.Msg;
import com.reins.sjtu_stranding.utils.msgutils.MsgUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserAuthController {

    @Autowired
    private UserAuthService userAuthService;

    @RequestMapping("/checkUserAuth")
    public int checkUserAuth(@RequestParam("username") String username, @RequestParam("password") String password) {
        return userAuthService.checkUserAuth(username, password);
    }

    @RequestMapping("/saveUserAuth")
    public Msg saveUserAuth(@RequestParam("username") String username, @RequestParam("password") String password) {
        if (!userAuthService.checkUsernameValid(username)) return MsgUtil.makeMsg(-1, "该用户名已存在！");
        UserAuth u = userAuthService.saveUserAuth(username, password);
        JSONObject data = JSONObject.fromObject(u);
        return MsgUtil.makeMsg(0, "注册成功！", data);
    }
}
