package com.springboot.aups.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.models.MaterialProductResoursePlan;
import com.springboot.aups.repository.MaterialProductResourcePlanRepository;

@Service
public class MaterialProductResourcePlanService {
	
	@Autowired
	private MaterialProductResourcePlanRepository rep;
	
	public MaterialProductResoursePlan nadjiPoMaterijalu(int idm) {
		return rep.findOneById(idm);
	}
	
	/*public MaterialProductResoursePlan nadjiPoPlanu(int idplan) {
		return rep.findOneByIdProductResourcePlan(idplan);
	}*/
}
