package com.springboot.aups.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.aups.models.WarehouseMaterial;

public interface WarehouseMaterialRepository extends JpaRepository<WarehouseMaterial, Long> {
	List<WarehouseMaterial> findAll();

}
