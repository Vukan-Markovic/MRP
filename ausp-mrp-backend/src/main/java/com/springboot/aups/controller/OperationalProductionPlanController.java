package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.dto.OperationalProductionPlanDTO;
import com.springboot.aups.models.OperationalProductionPlan;
import com.springboot.aups.repository.OperationalProductionPlanRepository;
import com.springboot.aups.services.OperationalProductionPlanService;
import com.springboot.aups.services.ProductOperationalProductionPlanService;

@RestController
@RequestMapping(value = "/operationalProductionPlan")
public class OperationalProductionPlanController {
	
	@Autowired
	private OperationalProductionPlanService ops;
	
	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<>(ops.getAllData(), HttpStatus.OK);
    }
	
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public OperationalProductionPlan newOperationalPlan(@RequestBody OperationalProductionPlan request) {
        return ops.addNew(request);
    }
    /*
	@RequestMapping(value = "", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
    public OperationalProductionPlanDTO updateOperationalPlan(@RequestBody OperationalProductionPlanDTO request) {
        return ops.addNew(request);
    }
	*/

}
