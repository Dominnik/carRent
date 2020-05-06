package com.sniu.taxi.rest;

import com.sniu.taxi.model.Order;
import com.sniu.taxi.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(value = "/rest/order")
public class OrderController {

    private OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @GetMapping
    @ResponseBody
    public List<Order> getAll() {
        return service.findAll();
    }

    @PostMapping
    public void save(@RequestBody Order item) {
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
