package com.springboot.aups.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.models.ProductOperationalProductionPlan;
import com.springboot.aups.repository.ProductOperationalProductionPlanRepository;

@Service
public class ProductOperationalProductionPlanService {
	
	@Autowired
	private ProductOperationalProductionPlanRepository r;
	
	public List<ProductOperationalProductionPlan> getAllPP() {
		List<ProductOperationalProductionPlan> ret = r.findAll();
		
		return ret;
	}

}
