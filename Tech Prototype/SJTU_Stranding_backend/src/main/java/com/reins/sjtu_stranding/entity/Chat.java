package com.reins.sjtu_stranding.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Chat {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "chat_id")
    private int chatId;
    @Basic
    @Column(name = "sender")
    private int sender;
    @Basic
    @Column(name = "receiver")
    private int receiver;

    @ManyToOne
    @JoinColumn(name = "sender", insertable=false, updatable=false)
    private User senderInfo;

    public User getSenderInfo() {
        return senderInfo;
    }

    public void setSenderInfo(User senderInfo) {
        this.senderInfo = senderInfo;
    }

    @ManyToOne
    @JoinColumn(name = "receiver", insertable=false, updatable=false)
    private User receiverInfo;

    public User getReceiverInfo() {
        return receiverInfo;
    }

    public void setReceiverInfo(User receiverInfo) {
        this.receiverInfo = receiverInfo;
    }

    public int getChatId() {
        return chatId;
    }

    public void setChatId(int chatId) {
        this.chatId = chatId;
    }

    public int getSender() {
        return sender;
    }

    public void setSender(int sender) {
        this.sender = sender;
    }

    public int getReceiver() {
        return receiver;
    }

    public void setReceiver(int receiver) {
        this.receiver = receiver;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Chat chat = (Chat) o;
        return chatId == chat.chatId && sender == chat.sender && receiver == chat.receiver;
    }

    @Override
    public int hashCode() {
        return Objects.hash(chatId, sender, receiver);
    }
}
