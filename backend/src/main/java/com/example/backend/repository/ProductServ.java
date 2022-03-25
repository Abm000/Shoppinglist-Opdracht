package com.example.backend.repository;


import com.example.backend.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.Collection;
import java.util.List;

@Repository
@Transactional
public class ProductServ implements RepositoryServ<Product> {
    @Autowired
    private EntityManager em;

    @Override
    public boolean add(Product element) {
        if (element != null) {
            em.persist(element);
            return true;
        }
        return false;
    }

    @Override
    public Product remove(Product element) {
        return RepositoryServ.super.remove(element);
    }

    @Override
    public Product findById(int id) {
        return em.find(Product.class, id);
    }

    @Override
    public Product save(Product element) {
        if (element != null){
            em.persist(element);
            return element;
        }
        throw new IllegalArgumentException("Product can't be null");
    }

    @Override
    public Collection<Product> findAll() {
        return null;
    }

    @Override
    public List<Product> findByQuery(String jpqlName, Object... params) {
        TypedQuery<Product> namedQuery = em.createNamedQuery(jpqlName, Product.class);

        return namedQuery
                .setParameter("var", params[0])
                .getResultList();

    }


}
