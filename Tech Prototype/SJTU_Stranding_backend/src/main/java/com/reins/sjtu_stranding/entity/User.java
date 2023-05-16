package com.reins.sjtu_stranding.entity;

import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id")
    private int userId;
    @Basic
    @Column(name = "nickname")
    private String nickname;
    @Basic
    @Column(name = "telephone")
    private String telephone;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "address")
    private String address;
    @Basic
    @Column(name = "avatar")
    private String avatar;
    @Basic
    @Column(name = "qq")
    private String qq;
    @Basic
    @Column(name = "score")
    private double score;
    @Basic
    @Column(name = "number")
    private int number;
    @Basic
    @Column(name = "sum_score")
    private double sumScore;
    @Basic
    @Column(name = "description")
    private String description;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(name = "subscribe",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "community_id"))
    private Set<Community> community = new LinkedHashSet<>();


    public Set<Community> getCommunity() {
        return community;
    }

    public void setCommunity(Set<Community> community) {
        this.community = community;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public double getSumScore() {
        return sumScore;
    }

    public void setSumScore(double sumScore) {
        this.sumScore = sumScore;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userId == user.userId && Double.compare(user.score, score) == 0 && number == user.number && Double.compare(user.sumScore, sumScore) == 0 && Objects.equals(nickname, user.nickname) && Objects.equals(telephone, user.telephone) && Objects.equals(email, user.email) && Objects.equals(address, user.address) && Objects.equals(avatar, user.avatar) && Objects.equals(qq, user.qq) && Objects.equals(description, user.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, nickname, telephone, email, address, avatar, qq, score, number, sumScore, description);
    }
}
