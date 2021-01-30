package com.springboot.aups.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springboot.aups.models.ProductResourcePlan;
import com.springboot.aups.repository.ProductResourcePlanRepository;

@Service
public class ProductResourcePlanService {
	@Autowired
	private ProductResourcePlanRepository prpr;
	
	public List<ProductResourcePlan> getAllPlan() {
		List<ProductResourcePlan> ret = prpr.findAll();
		
		return ret;
	}
	
	public ProductResourcePlan add(ProductResourcePlan p) {
		return prpr.save(p);
	}
}
