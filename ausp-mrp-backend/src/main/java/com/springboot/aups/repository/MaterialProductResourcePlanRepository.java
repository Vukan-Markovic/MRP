package com.springboot.aups.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.aups.models.MaterialProductResoursePlan;

public interface MaterialProductResourcePlanRepository extends JpaRepository<MaterialProductResoursePlan, Long>{
	
	MaterialProductResoursePlan findOneById(int idm);
//	MaterialProductResoursePlan findOneByIdProductResourcePlan(int idrp);
	List<MaterialProductResoursePlan> findAll();

}
