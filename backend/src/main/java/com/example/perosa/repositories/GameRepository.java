package com.example.perosa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.perosa.entities.Game;
import com.example.perosa.entities.Record;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
