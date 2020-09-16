package com.example.perosa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.perosa.entities.Game;
import com.example.perosa.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{

}
