package com.example.perosa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.perosa.entities.Record;

public interface GameRepository extends JpaRepository<Record, Long>{

}
