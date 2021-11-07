package com.example.backend.controller;


import com.example.backend.model.Item;
import com.example.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class ItemController {

    //seob ara itemservice classi, et oleks koguaeg ligipaas olemas
    //Singleton objekt (ei teki iga kord uut malukohta)
    @Autowired
    ItemService itemService;

    @GetMapping("items")
    //tagastab esemete listi paringu lopuks
    public List<Item> GetItems(){
        return itemService.getItems();
    }

    // localhost 8080/items ja POST paring, millele on kaasa antud body
    @PostMapping("items")
    //tagastab mittemidagi //nouab body ja mis tuubiks ta selle body teeb
    public String PostItem(@RequestBody Item item){
        itemService.saveItem(item);
        return "Lisatud " + item.getName();
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
       return itemService.getOneItem(id);
    }

    //Tana tehtud
    //andmebaas

    //delete paring
    //edit paring
    //view one item paring


    //kategooria osas
}
