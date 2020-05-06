package com.sniu.taxi.service;

import com.sniu.taxi.model.OrderEmployee;

import java.util.List;

public interface OrderEmployeeService {

    List<OrderEmployee> findAll();

    OrderEmployee findById(Long id);

    void save(OrderEmployee item);

    void delete(Long id);

    boolean canDelete(Long id);
}
