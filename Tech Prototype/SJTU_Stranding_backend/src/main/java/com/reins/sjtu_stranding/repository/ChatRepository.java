package com.reins.sjtu_stranding.repository;

import com.reins.sjtu_stranding.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Integer> {
    List<Chat> findChatsBySenderOrReceiver(int sender, int receiver);
    Chat findChatBySenderAndReceiver(int sender, int receiver);
}