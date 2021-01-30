package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.services.WarehouseService;

@RestController
@RequestMapping(value = "/warehouse")
public class WarehouseController {
	@Autowired
	WarehouseService service;
	
	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

}
