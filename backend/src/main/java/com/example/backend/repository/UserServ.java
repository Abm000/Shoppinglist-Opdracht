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
        if (element!=null){
            em.persist(element);
            return true;
        }
        return false;
    }
    public User getUserByUserName(String element){
        if (element==null || element.trim().equals(""))return null;
        TypedQuery<User> namedQuery = em.createNamedQuery("findUserByUserName", User.class);
        User user = namedQuery.setParameter("var", element.trim()).getResultList().stream().findFirst().orElse(null);
       return user;
    }
    public boolean cradantiolesValidations(User element){
        User user = getUserByUserName(element.getUserName());
        if (user==null) return false;
        return element.getPassword().equals(user.getPassword());
    }


    @Override
    public User remove(User element) {
        return RepositoryServ.super.remove(element);
    }

    @Override
    public User findById(int id) {
        return null;
    }

    @Override
    public User save(User element) {
        if (element!=null) {
            em.persist(element);
            return element;
        }
        return null;
    }

    @Override
    public Collection<User> findAll() {
        return null;
    }

    @Override
    public List<User> findByQuery(String jpqlName, Object... params) {
        return null;
    }
}
