package com.sniu.taxi.repository;

import com.sniu.taxi.model.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PositionRepository extends JpaRepository<Position, Long> {

    @Query(value = "SELECT id FROM employee as o WHERE o.employee_id = :id",nativeQuery = true)
    List<Long> canDelete(@Param("id")Long id);
}
