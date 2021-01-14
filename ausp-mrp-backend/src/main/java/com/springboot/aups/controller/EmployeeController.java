package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.aups.services.EmployeeService;

@RestController
@RequestMapping(value = "/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@GetMapping("")
	public String welcome() {
		return "Table employee!";
	}

	@RequestMapping(value = "jmbg",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart(@RequestParam("jmbg") String user) {
        return new ResponseEntity<>(service.nadjiPoJmbg(user), HttpStatus.OK);
    }

}
