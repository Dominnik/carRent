package com.sniu.taxi.service.impl;

import com.sniu.taxi.model.Position;
import com.sniu.taxi.repository.PositionRepository;
import com.sniu.taxi.service.PositionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionServiceImpl implements PositionService {

    private final PositionRepository repository;

    public PositionServiceImpl(PositionRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Position> findAll() {
        return repository.findAll();
    }

    @Override
    public Position findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void save(Position item) {
        repository.save(item);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public boolean canDelete(Long id) {
        return repository.canDelete(id).isEmpty();
    }
}
