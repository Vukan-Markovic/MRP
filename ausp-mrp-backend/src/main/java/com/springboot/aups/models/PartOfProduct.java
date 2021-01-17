package com.springboot.aups.models;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter @ToString
public class PartOfProduct {
	
	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String namePartOfProduct;
	private String dimensionsPartOfProduct;
	private Long productKey;
	private Long idMaterial;

}
