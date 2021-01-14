package com.springboot.aups.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.aups.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findAll();

}
