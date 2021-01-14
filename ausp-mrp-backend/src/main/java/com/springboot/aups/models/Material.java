package com.springboot.aups.models;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter @ToString
public class Material {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_material")
	private int id;
	@Column(name = "name_material")
	private String nameMaterial;
	@Column(name = "price_material")
	private double priceMaterial;
	@Column(name = "dimensions_material")
	private String dimensionsMaterial;
	
	public Material() {
		
	}
}
