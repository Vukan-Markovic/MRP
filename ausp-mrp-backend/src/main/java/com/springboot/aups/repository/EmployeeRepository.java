package com.springboot.aups.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.aups.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	
	Employee findOneById(Long id);
	Employee findOneByJmbg(String jmbg);

}
