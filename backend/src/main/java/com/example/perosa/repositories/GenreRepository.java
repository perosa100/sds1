package com.example.perosa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.perosa.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

}
