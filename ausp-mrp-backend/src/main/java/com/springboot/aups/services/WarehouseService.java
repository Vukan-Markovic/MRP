package com.springboot.aups.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.models.Warehouse;
import com.springboot.aups.repository.WarehouseRepository;

@Service
public class WarehouseService {
	@Autowired
	private WarehouseRepository wr;
	
	public List<Warehouse> getAll(){
		return wr.findAll();
	}
	
	public String getName(Long i) {
		Warehouse w = wr.findNameById(i);
		return w.getName();
	}
}
