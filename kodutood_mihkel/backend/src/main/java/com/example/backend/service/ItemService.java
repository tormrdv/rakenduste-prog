package com.example.backend.service;

import com.example.backend.model.Item;
import com.example.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ItemService {

    //seob ara itemservice classi, et oleks koguaeg ligipaas olemas
    //Singleton objekt (ei teki iga kord uut malukohta)
    @Autowired
    ItemRepository itemRepository;

    //funktsioon on repositorys olemas
    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    //funktsioon on repositorys olemas
    public void saveItem(Item item) {
        itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public void editItem(Item item) {
        itemRepository.save(item);
    }

    public Item getOneItem(Long id) throws Exception {
        if (itemRepository.findById(id).isPresent()){
            return itemRepository.findById(id).get();
        }
        throw new Exception();
    }
}
