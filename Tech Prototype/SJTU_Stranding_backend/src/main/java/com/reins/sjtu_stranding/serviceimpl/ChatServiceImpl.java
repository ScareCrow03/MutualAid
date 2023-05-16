package com.reins.sjtu_stranding.serviceimpl;

import com.reins.sjtu_stranding.dao.ChatDao;
import com.reins.sjtu_stranding.entity.Chat;
import com.reins.sjtu_stranding.entity.ChatInfo;
import com.reins.sjtu_stranding.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private ChatDao chatDao;

    @Override
    public List<Chat> getChat(int userId){
        List<Chat> c = chatDao.getChat(userId);
        int siz = c.size();
        for (int i = 0; i < siz; i++) {
            int sender = c.get(i).getSender(), receiver = c.get(i).getReceiver();
            if (receiver == userId) {
                c.get(i).setReceiver(sender);
                c.get(i).setSender(receiver);
            }
        }
        return c;
    }


    @Override
    public List<ChatInfo> getChatInfo(int chatId) {
        return chatDao.getChatInfo(chatId);
    }
    @Override
    public List<ChatInfo> sendChat(int sender, int receiver, String dialog) {
        return chatDao.sendChat(sender, receiver, dialog);
    }

    @Override
    public void addChat(int sender, int receiver) {
        chatDao.addChat(sender, receiver);
    }

}
