package com.sniu.taxi.repository;

import com.sniu.taxi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query(value = "SELECT id FROM orderemployee as o WHERE o.employee_id = :id",nativeQuery = true)
    List<Long> canDelete(@Param("id")Long id);
}
