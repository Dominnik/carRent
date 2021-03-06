package com.sniu.taxi.rest;

import com.sniu.taxi.service.ClientService;
import com.sniu.taxi.model.Client;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(value = "/rest/client")
public class ClientController {

    private ClientService service;

    public ClientController(ClientService service) {
        this.service = service;
    }

    @GetMapping
    @ResponseBody
    public List<Client> getAll() {
        return service.findAll();
    }

    @PostMapping
    public void save(@RequestBody Client item) {
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
