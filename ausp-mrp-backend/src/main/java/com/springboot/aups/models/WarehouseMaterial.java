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
public class WarehouseMaterial {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idMaterial;
	private int idWarehouse;
	private int quantity;

}
