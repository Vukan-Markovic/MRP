package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.aups.models.ProductResourcePlan;
import com.springboot.aups.services.ProductResourcePlanService;

@RestController
@RequestMapping(value = "/productResourcePlan")
public class ProductResourcePlanController {

	@Autowired
	private ProductResourcePlanService prps;
	
	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<>(prps.getAllPlan(), HttpStatus.OK);
    }
	
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ProductResourcePlan newMaterial(@RequestBody ProductResourcePlan request) {
        return prps.add(request);
    }
}
