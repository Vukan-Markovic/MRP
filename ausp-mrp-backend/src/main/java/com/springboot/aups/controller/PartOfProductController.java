package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.models.PartOfProduct;
import com.springboot.aups.services.PartOfProductService;

@RestController
@RequestMapping(value = "/partOfProduct")
public class PartOfProductController {
	@Autowired
	private PartOfProductService pps;
	
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public PartOfProduct newPartOfProduct(@RequestBody PartOfProduct request) {
        return pps.addNew(request);
    }
	@RequestMapping(value = "", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
    public PartOfProduct updatePartOfProduct(@RequestBody PartOfProduct request) {
        return pps.addNew(request);
    }
	
	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<>(pps.getAllParts(), HttpStatus.OK);
    }
}
