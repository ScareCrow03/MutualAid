package com.reins.sjtu_stranding.controller;
import com.reins.sjtu_stranding.entity.Chat;
import com.reins.sjtu_stranding.entity.ChatInfo;
import com.reins.sjtu_stranding.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ChatController {

    @Autowired
    private ChatService chatService;

    @RequestMapping(value = "/getChat",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Chat> getChat(@RequestParam("userId") int userId) {
        System.out.println("getChat");
        return chatService.getChat(userId);
    }
    @RequestMapping(value = "/getChatInfo",method = {RequestMethod.GET,RequestMethod.POST})
    public List<ChatInfo> getChatInfo(@RequestParam("chatId") int chatId) {
        System.out.println("getChatInfo");
        return chatService.getChatInfo(chatId);
    }
    @RequestMapping(value = "/sendChat",method = {RequestMethod.GET,RequestMethod.POST})
    public List<ChatInfo> sendChat(@RequestParam("sender") int sender, @RequestParam("receiver") int receiver, @RequestParam("dialog") String dialog) {
        System.out.println("sendChat");
        return chatService.sendChat(sender, receiver, dialog);
    }
    @RequestMapping(value = "/addChat",method = {RequestMethod.GET,RequestMethod.POST})
    public boolean addChat(@RequestParam("sender") int sender, @RequestParam("receiver") int receiver) {
        System.out.println("addChat");
        chatService.addChat(sender, receiver);
        return true;
    }
}
