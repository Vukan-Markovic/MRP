package com.springboot.aups.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.models.Material;
import com.springboot.aups.repository.MaterialRepository;

@Service
public class MaterialService {
	
	@Autowired
	private MaterialRepository mr;
	
	public Material nadjiPoId(Long id) {
		return mr.findOneById(id);
	}
	
	public Material nadjiPoImenu(String name) {
		return mr.findOneByNameMaterial(name);
	}
	
	public Material addNew(Material m) {
		return mr.save(m);
	}
	
	public List<Material> getAllMaterials() {
		List<Material> ret = mr.findAll();
		
		return ret;
	}
}
