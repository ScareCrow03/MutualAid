package com.reins.sjtu_stranding.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Community {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "community_id")
    private int communityId;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "image")
    private String image;



    public int getCommunityId() {
        return communityId;
    }

    public void setCommunityId(int communityId) {
        this.communityId = communityId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Community community = (Community) o;
        return communityId == community.communityId && Objects.equals(name, community.name) && Objects.equals(image, community.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(communityId, name, image);
    }
}
