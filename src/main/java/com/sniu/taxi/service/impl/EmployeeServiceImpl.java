package com.sniu.taxi.service.impl;

import com.sniu.taxi.model.Employee;
import com.sniu.taxi.repository.EmployeeRepository;
import com.sniu.taxi.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeServiceImpl(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Employee> findAll() {
        return repository.findAll();
    }

    @Override
    public Employee findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void save(Employee item) {
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
