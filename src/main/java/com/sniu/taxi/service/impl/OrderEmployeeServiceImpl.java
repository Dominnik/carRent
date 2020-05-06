package com.sniu.taxi.service.impl;

import com.sniu.taxi.model.OrderEmployee;
import com.sniu.taxi.repository.OrderEmployeeRepository;
import com.sniu.taxi.service.OrderEmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderEmployeeServiceImpl implements OrderEmployeeService {

    private final OrderEmployeeRepository repository;

    public OrderEmployeeServiceImpl(OrderEmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<OrderEmployee> findAll() {
        return repository.findAll();
    }

    @Override
    public OrderEmployee findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void save(OrderEmployee item) {
        repository.save(item);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public boolean canDelete(Long id) {
        return true;
    }
}
