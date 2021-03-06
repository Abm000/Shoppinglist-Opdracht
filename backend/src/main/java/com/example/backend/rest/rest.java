package com.example.backend.rest;
import com.example.backend.models.Product;
import com.example.backend.models.User;
import com.example.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class rest {
    @Autowired
    private ProductServ productServ;
    @Autowired
    private UserServ userServ;
    //
    @GetMapping("/product/{userName}")
    public ResponseEntity<List<Product>> findByUser(@PathVariable String userName) {
        User user = userServ.getUserByUserName(userName);
      return ResponseEntity.ok(productServ.findByQuery("find-All-Products",user.getId()));
    }
    @PostMapping("/product")
    public ResponseEntity validUser(@RequestParam String product, @RequestParam String username) {
        Product product1 = new Product();
        User user = userServ.getUserByUserName(username);
        if (user == null) return ResponseEntity.ok(false);
        product1.setName(product);
        product1.setUser(user);
        productServ.save(product1);
        return ResponseEntity.ok(true);
    }
    @PostMapping("/login")
    public ResponseEntity validUser(@RequestBody User user) {
      return  ResponseEntity.ok( userServ.cradantiolesValidations(user));
    }



}
