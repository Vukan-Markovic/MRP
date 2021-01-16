package com.springboot.aups.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.models.ProductResourcePlan;
import com.springboot.aups.repository.ProductResourcePlanRepository;

@Service
public class ProductResourcePlanService {
	@Autowired
	private ProductResourcePlanRepository prpr;
	
	public ProductResourcePlan add(ProductResourcePlan p) {
		return prpr.save(p);
	}
}
