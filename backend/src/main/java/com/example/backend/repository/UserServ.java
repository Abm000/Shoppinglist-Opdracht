package com.example.backend.repository;

import com.example.backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.Collection;
import java.util.List;


@Repository
@Transactional
public class UserServ implements RepositoryServ<User> {
    @Autowired
    private EntityManager em;
    @Override
    public boolean add(User element) {
        // if it is null then there is no object to add
        if (element!=null){
            // add new instance to the database
            em.persist(element);
            return true;
        }
        return false;
    }
    // get user by its unique name
    public User getUserByUserName(String element){
        // if the string is null or empty return null
        if (element==null || element.trim().equals(""))return null;
        // use the query FindUserByUserName
        TypedQuery<User> namedQuery = em.createNamedQuery("findUserByUserName", User.class);
        // make instance of the user if its found
        User user = namedQuery.setParameter("var", element.trim()).getResultList().stream().findFirst().orElse(null);
       return user;
    }
    // check the validity of login info
    public boolean cradantiolesValidations(User element){
        // get the user instance from the database
        User user = getUserByUserName(element.getUserName());
        if (user==null) return false;
        // compare the user is given ni the parameter with the found user in the database
        return element.getPassword().equals(user.getPassword());
    }


    @Override
    public User save(User element) {
        if (element!=null) {
            em.persist(element);
            return element;
        }
        return null;
    }

}
