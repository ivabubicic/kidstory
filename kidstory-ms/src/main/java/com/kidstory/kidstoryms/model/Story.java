package com.kidstory.kidstoryms.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Story {

    @Column(unique = true)
    @Id
    private String id;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private String src;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String duration;

    @Column(nullable = false)
    private String likes;

    @Column(nullable = false)
    private String author;

}
