package com.example.perosa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.perosa.entities.Genre;
import com.example.perosa.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

}
