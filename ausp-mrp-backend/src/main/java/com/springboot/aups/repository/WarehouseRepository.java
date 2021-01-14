package com.springboot.aups.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.aups.models.Warehouse;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
	List<Warehouse> findAll();
	Warehouse findNameById(Long i);
}
