package com.sniu.taxi.service;

import com.sniu.taxi.model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();

    Employee findById(Long id);

    void save(Employee item);

    void delete(Long id);

    boolean canDelete(Long id);
}
