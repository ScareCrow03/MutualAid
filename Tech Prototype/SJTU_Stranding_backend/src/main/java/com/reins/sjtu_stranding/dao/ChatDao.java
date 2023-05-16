package com.reins.sjtu_stranding.dao;

import com.reins.sjtu_stranding.entity.Chat;
import com.reins.sjtu_stranding.entity.ChatInfo;

import java.util.List;
public interface ChatDao {
    List<Chat> getChat(int userId);
    List<ChatInfo> getChatInfo(int chatId);
    List<ChatInfo> sendChat(int sender, int receiver, String dialog);
    void addChat(int sender, int receiver);
}
