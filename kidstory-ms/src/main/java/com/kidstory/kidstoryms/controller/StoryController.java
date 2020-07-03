package com.kidstory.kidstoryms.controller;

import com.kidstory.kidstoryms.model.Story;
import com.kidstory.kidstoryms.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/story")
public class StoryController {
    private StoryRepository repository;

    @Autowired
    public StoryController(StoryRepository repository) {
        this.repository = repository;
    }

    @Autowired


    @GetMapping
    @ResponseBody
    public List<Story> getAll() {
        return this.repository.findAll();
    }

    @GetMapping(value = "{id}")
    @ResponseBody
    public Story getById(@PathVariable String id) {
        return this.repository.findById(id).get();
    }

//    public ResponseEntity<Object> getById(@PathVariable String id) {
//        return ResponseEntity.ok(id);
//    }

}
