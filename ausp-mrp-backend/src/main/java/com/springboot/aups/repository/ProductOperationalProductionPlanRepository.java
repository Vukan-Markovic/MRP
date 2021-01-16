package com.springboot.aups.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.aups.models.ProductOperationalProductionPlan;

public interface ProductOperationalProductionPlanRepository  extends JpaRepository<ProductOperationalProductionPlan, Long> {
	
	List<ProductOperationalProductionPlan> findAll();

}
