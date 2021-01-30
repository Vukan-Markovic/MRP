package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class OnlyProductsController {
	@Autowired
	ProductService ps;
	
	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<>(ps.getAllData(), HttpStatus.OK);
    }

}
