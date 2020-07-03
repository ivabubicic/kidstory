package com.kidstory.kidstoryms.repository;

import com.kidstory.kidstoryms.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryRepository extends JpaRepository< Story, String> {


}
