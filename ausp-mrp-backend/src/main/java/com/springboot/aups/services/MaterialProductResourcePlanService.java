package com.springboot.aups.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.dto.MaterialProductResoursePlanDTO;
import com.springboot.aups.dto.OperationalProductionPlanDTO;
import com.springboot.aups.models.MaterialProductResoursePlan;
import com.springboot.aups.models.OperationalProductionPlan;
import com.springboot.aups.models.ProductOperationalProductionPlan;
import com.springboot.aups.models.ProductResourcePlan;
import com.springboot.aups.repository.MaterialProductResourcePlanRepository;
import com.springboot.aups.repository.OperationalProductionPlanRepository;
import com.springboot.aups.repository.ProductResourcePlanRepository;

@Service
public class MaterialProductResourcePlanService {
	
	@Autowired
	private MaterialProductResourcePlanRepository matplanrep;
	@Autowired
	private ProductResourcePlanRepository planrep;
	
	public MaterialProductResoursePlan nadjiPoMaterijalu(int idm) {
		return matplanrep.findOneById(idm);
	}
	
	public MaterialProductResoursePlan add(MaterialProductResoursePlan m) {
		return matplanrep.save(m);
	}
	
	
	public List<MaterialProductResoursePlanDTO> getAllData() {
		
		List<MaterialProductResoursePlanDTO> retList = new ArrayList<MaterialProductResoursePlanDTO>();
				
		
		for (MaterialProductResoursePlan matplan :  matplanrep.findAll()) {
			for (ProductResourcePlan plan : planrep.findAll()) {
				if(plan.getId()==matplan.getId()) {
					MaterialProductResoursePlanDTO newM = new MaterialProductResoursePlanDTO
							(plan.getId(), matplan.getId_material(),plan.getNeededQuantityOfMaterial());
					retList.add(newM);
				}
			}
		}
		
		return retList;
	}
	
}
