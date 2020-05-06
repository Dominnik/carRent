package com.sniu.taxi.repository;

import com.sniu.taxi.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query(value = "SELECT id FROM orderemployee as o WHERE o.order_id = :id",nativeQuery = true)
    List<Long> canDelete(@Param("id")Long id);
}
