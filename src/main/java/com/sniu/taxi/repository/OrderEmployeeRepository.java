package com.sniu.taxi.repository;

import com.sniu.taxi.model.OrderEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderEmployeeRepository extends JpaRepository<OrderEmployee, Long> {
}
