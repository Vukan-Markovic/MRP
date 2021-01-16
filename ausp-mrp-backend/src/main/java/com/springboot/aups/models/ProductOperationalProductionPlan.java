package com.springboot.aups.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter @ToString
public class ProductOperationalProductionPlan {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long productKey;

	
	public ProductOperationalProductionPlan (Long id, Long productKey) {
		this.id=id;
		this.productKey = productKey;		
	}

}
