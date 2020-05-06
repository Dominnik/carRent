package com.sniu.taxi.service;

import com.sniu.taxi.model.Position;

import java.util.List;

public interface PositionService {

    List<Position> findAll();

    Position findById(Long id);

    void save(Position item);

    void delete(Long id);

    boolean canDelete(Long id);
}
