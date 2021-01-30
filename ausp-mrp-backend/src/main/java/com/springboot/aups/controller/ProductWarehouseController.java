package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.aups.services.WarehouseProductService;

@RestController
@RequestMapping(value = "/productwarehouse")
public class ProductWarehouseController {
	
	@Autowired
	private WarehouseProductService service;
	

	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<>(service.getAllData(), HttpStatus.OK);
    }

}
