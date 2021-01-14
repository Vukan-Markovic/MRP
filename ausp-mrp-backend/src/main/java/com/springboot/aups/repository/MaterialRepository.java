package com.springboot.aups.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.aups.models.Material;

public interface MaterialRepository extends JpaRepository<Material, Long>{
	
    Material findOneById(Long id);
    Material findOneByNameMaterial(String name_material);
    List<Material> findAll();

}
