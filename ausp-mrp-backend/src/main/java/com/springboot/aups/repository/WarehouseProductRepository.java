package com.springboot.aups.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.aups.models.WarehouseProduct;

public interface WarehouseProductRepository extends JpaRepository<WarehouseProduct, Long> {
	List<WarehouseProduct> findAll();

}
