package com.example.backend.repository;
// basic functions should exist in every repository
public interface RepositoryServ<E>{
     boolean add(E element);
    E save(E element);
}
