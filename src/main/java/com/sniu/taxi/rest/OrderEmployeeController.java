package com.sniu.taxi.rest;

import com.sniu.taxi.service.OrderEmployeeService;
import com.sniu.taxi.model.OrderEmployee;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(value = "/rest/orderemployee")
public class OrderEmployeeController {

    private OrderEmployeeService service;

    public OrderEmployeeController(OrderEmployeeService service) {
        this.service = service;
    }

    @GetMapping
    @ResponseBody
    public List<OrderEmployee> getAll() {
        return service.findAll();
    }

    @PostMapping
    public void save(@RequestBody OrderEmployee item) {
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
