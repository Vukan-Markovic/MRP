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
	private Long id; //id_product_resource_plan
	private Long id_material;
	
	public MaterialProductResoursePlan () {
	}

}
