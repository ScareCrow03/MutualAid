package com.reins.sjtu_stranding.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "chat_info", schema = "sjtu_stranding")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer", "fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "chatInfoId")
public class ChatInfo {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "chat_info_id")
    private int chatInfoId;
    @Basic
    @Column(name = "chat_id")
    private int chatId;
    @Basic
    @Column(name = "sender")
    private int sender;
    @Basic
    @Column(name = "receiver")
    private int receiver;
    @Basic
    @Column(name = "dialog")
    private String dialog;
    @Basic
    @Column(name = "time")
    private Timestamp time;

//    @ManyToOne
//    @JoinColumn(name = "chat_id", insertable=false, updatable=false)
//    private Chat chat;
//
//    public Chat getChat() {
//        return chat;
//    }
//
//    public void setChat(Chat chat) {
//        this.chat = chat;
//    }

    public int getChatInfoId() {
        return chatInfoId;
    }

    public void setChatInfoId(int chatInfoId) {
        this.chatInfoId = chatInfoId;
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

    public String getDialog() {
        return dialog;
    }

    public void setDialog(String dialog) {
        this.dialog = dialog;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChatInfo chatInfo = (ChatInfo) o;
        return chatInfoId == chatInfo.chatInfoId && chatId == chatInfo.chatId && sender == chatInfo.sender && receiver == chatInfo.receiver && Objects.equals(dialog, chatInfo.dialog) && Objects.equals(time, chatInfo.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(chatInfoId, chatId, sender, receiver, dialog, time);
    }
}
