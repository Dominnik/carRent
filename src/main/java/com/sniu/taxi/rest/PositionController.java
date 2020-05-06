package com.sniu.taxi.rest;

import com.sniu.taxi.service.PositionService;
import com.sniu.taxi.model.Position;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(value = "/rest/position")
public class PositionController {

    private PositionService service;

    public PositionController(PositionService service) {
        this.service = service;
    }

    @GetMapping
    @ResponseBody
    public List<Position> getAll() {
        return service.findAll();
    }

    @PostMapping
    public void save(@RequestBody Position item) {
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
