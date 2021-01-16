package com.springboot.aups.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.springboot.aups.dto.OperationalProductionPlanDTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter @ToString
public class OperationalProductionPlan {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "needed_quantity_of_product")
	private int neededQuantityOfProduct;
	
	public OperationalProductionPlan() {}
	
//	public OperationalProductionPlan (Long id, int neededQuantityOfProduct) {
//		this.id = id;
//		this.neededQuantityOfProduct = neededQuantityOfProduct;
//	}

}
