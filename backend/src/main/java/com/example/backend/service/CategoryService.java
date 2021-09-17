package com.example.backend.service;

import com.example.backend.model.Item;
import com.example.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Item> getCategory() {
        return categoryRepository.findAll();
    }


    public void saveCategory(Item category) {
        categoryRepository.save(category);
    }
}
