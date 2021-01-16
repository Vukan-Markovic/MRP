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
//@Table(name = "material_product_resource_plan")
public class MaterialProductResoursePlan {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; //id_material
	private int id_product_resource_plan;

}
