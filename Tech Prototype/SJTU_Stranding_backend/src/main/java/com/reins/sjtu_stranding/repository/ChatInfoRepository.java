package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.ChatInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatInfoRepository extends JpaRepository<ChatInfo, Integer> {
    List<ChatInfo> findChatInfosByChatId(int chatId);

}