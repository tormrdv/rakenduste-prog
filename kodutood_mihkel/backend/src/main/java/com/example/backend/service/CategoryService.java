package com.example.backend.service;

import com.example.backend.model.Category;
import com.example.backend.model.Item;
import com.example.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }


    public void saveCategory(Category category) {
        categoryRepository.save(category);
    }

    public void deleteCategory(Long id) { categoryRepository.deleteById(id);}

    public void editCategory(Category category) { categoryRepository.save(category);}

    public Category getOneCategory(Long id) throws Exception {
        if (categoryRepository.findById(id).isPresent()){
            return categoryRepository.findById(id).get();
        }
        throw new Exception();
    }
    //edit
    //view-one
    //andmebaas
}
