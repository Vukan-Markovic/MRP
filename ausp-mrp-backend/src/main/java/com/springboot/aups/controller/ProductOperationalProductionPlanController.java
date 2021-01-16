package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.models.OperationalProductionPlan;
import com.springboot.aups.models.ProductOperationalProductionPlan;
import com.springboot.aups.services.ProductOperationalProductionPlanService;

@RestController
@RequestMapping(value = "/productOperationalProductionPlan")
public class ProductOperationalProductionPlanController {

	@Autowired
	private ProductOperationalProductionPlanService pops;
	
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ProductOperationalProductionPlan newOperationalPlan(@RequestBody ProductOperationalProductionPlan request) {
		System.out.println(request);
        return pops.add(request);
    }
}
