package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.models.Material;
import com.springboot.aups.models.ProductResourcePlan;
import com.springboot.aups.services.ProductResourcePlanService;

@RestController
@RequestMapping(value = "/prpr")
public class ProductResourcePlanController {

	@Autowired
	private ProductResourcePlanService prps;
	
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ProductResourcePlan newMaterial(@RequestBody ProductResourcePlan request) {
        return prps.add(request);
    }
}
