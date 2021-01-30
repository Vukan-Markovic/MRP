package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.services.WarehouseMaterialService;

@RestController
@RequestMapping(value = "/materialwarehouse")
public class MaterialWarehouseController {
	
	@Autowired
	private WarehouseMaterialService service;
	

	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<>(service.getAllData(), HttpStatus.OK);
    }

}
