package com.springboot.aups.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class PartOfProductDTO {
	
	private Long id;
	private String namePartOfProduct;
	private String dimensionsPartOfProduct;
	private Long idMaterial;
	private String nameMaterial;
	private Long productKey;
	private String nameProduct;
	
	public PartOfProductDTO(Long id, String namePart, String dimensions, Long material, String nameMat, Long product, String nameProduct) {
		this.id = id;
		this.namePartOfProduct = namePart;
		this.dimensionsPartOfProduct = dimensions;
		this.idMaterial = material;
		this.nameMaterial = nameMat;
		this.productKey = product;
		this.nameProduct = nameProduct;
		
	}

}
