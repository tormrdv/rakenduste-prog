package com.example.backend.controller;

import com.example.backend.model.Category;

import com.example.backend.model.Item;
import com.example.backend.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("category")
    public List<Category> getCategory(){
        return categoryService.getCategories();
    }

    @PostMapping("category")
    public String postCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Saved " + category.getName();
    }

    @DeleteMapping("category/{id}")
    public String  deleteCategory(@PathVariable("id") Long id){
        categoryService.deleteCategory(id);
        return "Deleted";
    }

    @PostMapping("edit-category")
    public void editCategory(@RequestBody Category category){
        categoryService.editCategory(category);
    }

    @GetMapping("view-category/{id}")
    public Category getOneCategory(@PathVariable Long id) throws Exception {
        return categoryService.getOneCategory(id);
    }
}
