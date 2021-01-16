package com.springboot.aups.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.springboot.aups.dto.OperationalProductionPlanDTO;
import com.springboot.aups.dto.ProductDTO;
import com.springboot.aups.models.OperationalProductionPlan;
import com.springboot.aups.models.Product;
import com.springboot.aups.models.ProductOperationalProductionPlan;
import com.springboot.aups.models.WarehouseProduct;
import com.springboot.aups.repository.OperationalProductionPlanRepository;
import com.springboot.aups.repository.ProductOperationalProductionPlanRepository;

@Service
public class OperationalProductionPlanService {
	
	@Autowired
	private OperationalProductionPlanRepository repos;

	@Autowired
	ProductOperationalProductionPlanService pps;
	@Autowired
	OperationalProductionPlanRepository rep;
	
	
	public OperationalProductionPlan addNew(OperationalProductionPlan plan) {
		return repos.save(plan);
	}
	public List<OperationalProductionPlanDTO> getAllData() {
		
		List<OperationalProductionPlanDTO> retList = new ArrayList<OperationalProductionPlanDTO>();
				
		
		for (ProductOperationalProductionPlan prplan :  pps.getAllPP()) {
			for (OperationalProductionPlan plan : rep.findAll()) {
				if(plan.getId()==prplan.getId()) {
					OperationalProductionPlanDTO newProductPlan = new OperationalProductionPlanDTO
							(plan.getId(),prplan.getProductKey(),plan.getNeededQuantityOfProduct());
					retList.add(newProductPlan);
				}
			}
		}
		
		return retList;
	}
	

}
