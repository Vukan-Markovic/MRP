package com.springboot.aups.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.aups.models.OperationalProductionPlan;

public interface OperationalProductionPlanRepository extends JpaRepository<OperationalProductionPlan, Long> {
	
	OperationalProductionPlan findOneById(Long id);
	
	List<OperationalProductionPlan> findAll();

}