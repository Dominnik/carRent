package com.sniu.taxi.rest;

import com.sniu.taxi.model.Employee;
import com.sniu.taxi.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(value = "/rest/employee")
public class EmployeeController {

    private EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    @ResponseBody
    public List<Employee> getAll() {
        return service.findAll();
    }

    @PostMapping
    public void save(@RequestBody Employee item) {
        service.save(item);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        service.delete(id);
    }

    @GetMapping(value = "/can-delete/{id}")
    public ResponseEntity<Boolean> canDelete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.canDelete(id));
    }
}
