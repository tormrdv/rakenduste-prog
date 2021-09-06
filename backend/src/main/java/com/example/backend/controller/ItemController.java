package com.example.backend.controller;


import com.example.backend.model.Item;
import com.example.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> GetItems(){
        return itemService.getItems();
    }

    @PostMapping("items")
    public String PostItem(@RequestBody Item item){
        itemService.saveItem(item);
        return "Lisatud " + item.getName();
    }


    //delete paring
    //edit paring
    //view one item paring

    //andmebaas

    //kategooria osas
}
