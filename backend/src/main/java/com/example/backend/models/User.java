package com.example.backend.models;

import javax.persistence.*;
import java.util.Collection;


@Entity
@NamedQueries({
        @NamedQuery(name="findUserByUserName",query="SELECT u FROM User u WHERE u.userName = :var")
})

public class User  {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String userName;
    private String password;
    @OneToMany(mappedBy = "user")
    private Collection<Product> products;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Product> getProducts() {
        return products;
    }

    public void setProducts(Collection<Product> products) {
        this.products = products;
    }
}
