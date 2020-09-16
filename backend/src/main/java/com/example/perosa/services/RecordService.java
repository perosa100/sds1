package com.example.perosa.services;

import java.time.Instant;
import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.perosa.dto.RecordDTO;
import com.example.perosa.dto.RecordInsertDTO;
import com.example.perosa.entities.Game;
import com.example.perosa.entities.Record;
import com.example.perosa.repositories.GameRepository;
import com.example.perosa.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;

	@Autowired
	private GameRepository gameRepository;

	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());

		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);

		entity = repository.save(entity);
		return new RecordDTO(entity);
	}
}
