package com.springboot.aups.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class ProductDTO {
	
	private Long productKey;
	private String nameProduct;
	private double priceProduct;
	private int quantity;
	private String nameWarehouse;
	
	public ProductDTO(String name, Long key, String s, double d, int q) {
		this.nameWarehouse = name;
		this.productKey = key;
		this.nameProduct = s;
		this.priceProduct = d;
		this.quantity = q;
	}
}
