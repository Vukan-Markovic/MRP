package com.springboot.aups.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.models.WarehouseProduct;
import com.springboot.aups.repository.WarehouseProductRepository;

@Service
public class WarehouseProductService {
	@Autowired
	private WarehouseProductRepository wr;
	
	public List<WarehouseProduct> getAllData(){
		return wr.findAll();
	}
}
