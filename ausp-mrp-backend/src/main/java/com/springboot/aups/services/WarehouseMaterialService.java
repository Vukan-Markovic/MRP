package com.springboot.aups.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.models.WarehouseMaterial;
import com.springboot.aups.repository.WarehouseMaterialRepository;

@Service
public class WarehouseMaterialService {
	@Autowired
	private WarehouseMaterialRepository rep;
	
	public List<WarehouseMaterial> getAllData(){
		return rep.findAll();
	}
}
