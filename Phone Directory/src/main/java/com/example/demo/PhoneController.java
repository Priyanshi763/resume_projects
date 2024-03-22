package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

    public class PhoneController {
        @Autowired
        private final PhoneDirectory phoneDirectory = new PhoneDirectory();

        @PostMapping("/insert")
        public void insertContact(@RequestParam String contact) {
            phoneDirectory.insert(contact);
        }

        @GetMapping("/search")
        public boolean searchContact(@RequestParam String contact) {
            return phoneDirectory.search(contact);
        }
    }

    // via request param all the data coming in json format from the server will be automatically put into the argument
// if there is more data in json to be requested we do requestbody
