package com.sniu.taxi.repository;

import com.sniu.taxi.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    @Query(value = "SELECT id FROM ord as o WHERE o.client_id = :id",nativeQuery = true)
    List<Long> canDelete(@Param("id")Long id);
}
