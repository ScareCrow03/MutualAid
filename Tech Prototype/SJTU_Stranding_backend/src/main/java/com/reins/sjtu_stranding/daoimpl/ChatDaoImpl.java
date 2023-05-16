package com.reins.sjtu_stranding.daoimpl;

import com.reins.sjtu_stranding.dao.ChatDao;
import com.reins.sjtu_stranding.entity.Chat;
import com.reins.sjtu_stranding.entity.ChatInfo;
import com.reins.sjtu_stranding.entity.User;
import com.reins.sjtu_stranding.repository.ChatInfoRepository;
import com.reins.sjtu_stranding.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public class ChatDaoImpl implements ChatDao {
    @Autowired
    private ChatRepository chatRepository;
    @Override
    public List<Chat> getChat(int sender) {
        return chatRepository.findChatsBySenderOrReceiver(sender, sender);
    }
    @Autowired
    private ChatInfoRepository chatInfoRepository;
    @Override
    public List<ChatInfo> getChatInfo(int chatId) {
        return chatInfoRepository.findChatInfosByChatId(chatId);
    }
    @Override
    public List<ChatInfo> sendChat(int sender, int receiver, String dialog) {
        ChatInfo c = new ChatInfo();
        c.setSender(sender);
        c.setReceiver(receiver);
        c.setDialog(dialog);
        if (receiver < sender) {
            int tmp = sender;
            sender = receiver;
            receiver = tmp;
        }
        Timestamp ts = new Timestamp(System.currentTimeMillis());
        c.setTime(ts);
        int chatId = chatRepository.findChatBySenderAndReceiver(sender, receiver).getChatId();
        c.setChatId(chatId);
        chatInfoRepository.save(c);
        return chatInfoRepository.findChatInfosByChatId(chatId);
    }
    @Override
    public void addChat(int sender, int receiver) {
        if (receiver < sender) {
            int tmp = sender;
            sender = receiver;
            receiver = tmp;
        }
        Chat c = chatRepository.findChatBySenderAndReceiver(sender, receiver);
        if (c == null) {
            c = new Chat();
            c.setSender(sender);
            c.setReceiver(receiver);
            chatRepository.save(c);
        }
    }

}
