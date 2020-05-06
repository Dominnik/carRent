package com.sniu.taxi.service.impl;

import com.sniu.taxi.model.Car;
import com.sniu.taxi.repository.CarRepository;
import com.sniu.taxi.service.CarService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository repository;

    public CarServiceImpl(CarRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Car> findAll() {
        return repository.findAll();
    }

    @Override
    public Car findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void save(Car item) {
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
