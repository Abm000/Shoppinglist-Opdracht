package com.example.backend.repository;

import java.util.Collection;
import java.util.List;

public interface RepositoryServ<E>{

    default boolean add(E element) {
        return false;
    }

    default E remove(E element) {
        return null;
    }

    E findById(int id);

    E save(E element);

    Collection<E> findAll();
    public List<E> findByQuery(String jpqlName, Object... params);

}
