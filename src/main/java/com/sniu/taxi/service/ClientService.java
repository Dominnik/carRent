package com.sniu.taxi.service;

import com.sniu.taxi.model.Client;

import java.util.List;

public interface ClientService {

    List<Client> findAll();

    Client findById(Long id);

    void save(Client item);

    void delete(Long id);

    boolean canDelete(Long id);
}
