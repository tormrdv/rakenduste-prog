package com.example.backend.controller;


import com.example.backend.model.Item;
import com.example.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("items")
    public List<Item> GetCategories(){
        return categoryService.getCategory();
    }

    @PostMapping("items")
    public String PostCategories(@RequestBody Item category){
        categoryService.saveCategory(category);
        return "Lisatud " + category.getName();
    }


    //delete paring
    //edit paring
    //view one item paring

    //andmebaas

    //kategooria osas
}
