package com.sniu.taxi.service;

import com.sniu.taxi.model.Order;

import java.util.List;

public interface OrderService {

    List<Order> findAll();

    Order findById(Long id);

    void save(Order item);

    void delete(Long id);

    boolean canDelete(Long id);
}
