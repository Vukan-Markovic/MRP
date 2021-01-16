package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.models.MaterialProductResoursePlan;
import com.springboot.aups.models.OperationalProductionPlan;
import com.springboot.aups.services.MaterialProductResourcePlanService;

@RestController
@RequestMapping(value = "/materialProductResoursePlan")
public class MaterialProductResoursePlanController {
	
	@Autowired
	private MaterialProductResourcePlanService service;
	
	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(service.getAllData(), HttpStatus.OK);
    }
	
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public MaterialProductResoursePlan newMatPlan(@RequestBody MaterialProductResoursePlan request) {
        return service.add(request);
    }

}
