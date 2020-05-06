package com.sniu.taxi.service;

import com.sniu.taxi.model.Car;

import java.util.List;

public interface CarService {

    List<Car> findAll();

    Car findById(Long id);

    void save(Car item);

    void delete(Long id);

    boolean canDelete(Long id);
}
