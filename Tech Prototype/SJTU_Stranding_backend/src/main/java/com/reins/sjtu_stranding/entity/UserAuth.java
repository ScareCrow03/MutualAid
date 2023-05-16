package com.reins.sjtu_stranding.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "user_auth", schema = "sjtu_stranding", catalog = "")
public class UserAuth {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id")
    private int userId;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name = "password")
    private String password;
    @Basic
    @Column(name = "type")
    private short type;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public short getType() {
        return type;
    }

    public void setType(short type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserAuth userAuth = (UserAuth) o;
        return userId == userAuth.userId && type == userAuth.type && Objects.equals(username, userAuth.username) && Objects.equals(password, userAuth.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, username, password, type);
    }
}
