package com.sniu.taxi.service.impl;

import com.sniu.taxi.model.Client;
import com.sniu.taxi.repository.ClientRepository;
import com.sniu.taxi.service.ClientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepository repository;

    public ClientServiceImpl(ClientRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Client> findAll() {
        return repository.findAll();
    }

    @Override
    public Client findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void save(Client item) {
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
