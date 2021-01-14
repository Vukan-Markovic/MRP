package com.springboot.aups.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.models.Employee;
import com.springboot.aups.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository er;
	
	public Employee nadjiPoId(Long id) {
		return er.findOneById(id);
	}
	
	public Employee nadjiPoJmbg(String jmbg) {
		return er.findOneByJmbg(jmbg);
	}
}
