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
public class ProductResourcePlan {
	
	@Id
	private Long id; //id_product_resource_plan
	private int neededQuantityOfMaterial;
	//private String orderDate;
	//private Long idEmployee;
	private int idMaterial;

}
