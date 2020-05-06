package com.sniu.taxi.service.impl;

import com.sniu.taxi.model.Order;
import com.sniu.taxi.repository.OrderRepository;
import com.sniu.taxi.service.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository repository;

    public OrderServiceImpl(OrderRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Order> findAll() {
        return repository.findAll();
    }

    @Override
    public Order findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void save(Order item) {
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
