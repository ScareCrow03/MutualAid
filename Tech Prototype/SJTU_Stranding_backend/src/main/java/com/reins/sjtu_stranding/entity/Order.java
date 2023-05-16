package com.reins.sjtu_stranding.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "`order`", schema = "sjtu_stranding")
public class Order {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "order_id")
    private int orderId;
    @Basic
    @Column(name = "item_id")
    private int itemId;
    @Basic
    @Column(name = "user_id")
    private int userId;
    @Basic
    @Column(name = "buyer")
    private int buyer;
    @Basic
    @Column(name = "score")
    private Double score;
    @Basic
    @Column(name = "state")
    private short state;
    @Basic
    @Column(name = "time")
    private Timestamp time;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable=false, updatable=false)
    private User userInfo;

    public User getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(User userInfo) {
        this.userInfo = userInfo;
    }

    @ManyToOne
    @JoinColumn(name = "buyer", insertable=false, updatable=false)
    private User buyerInfo;

    public User getBuyerInfo() {
        return buyerInfo;
    }

    public void setBuyerInfo(User buyerInfo) {
        this.buyerInfo = buyerInfo;
    }

    @ManyToOne
    @JoinColumn(name = "item_id", insertable=false, updatable=false)
    private Item item;

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getBuyer() {
        return buyer;
    }

    public void setBuyer(int buyer) {
        this.buyer = buyer;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public short getState() {
        return state;
    }

    public void setState(short state) {
        this.state = state;
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
        Order order = (Order) o;
        return orderId == order.orderId && itemId == order.itemId && userId == order.userId && buyer == order.buyer && state == order.state && Objects.equals(score, order.score) && Objects.equals(time, order.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderId, itemId, userId, buyer, score, state, time);
    }
}
