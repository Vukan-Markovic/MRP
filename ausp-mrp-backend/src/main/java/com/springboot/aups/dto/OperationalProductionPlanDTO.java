package com.springboot.aups.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class OperationalProductionPlanDTO {
	// klasa za  cuvanje porudzbine kupca
	// medjutabela proizvod-operativni plan i tabela operativni plan
	private Long id;
	private Long productKey;
	private int neededQuantityOfProduct;
	
	public OperationalProductionPlanDTO(Long idPlan, Long productKey, int quantity) {
		this.id = idPlan;
		this.productKey = productKey;
		this.neededQuantityOfProduct = quantity;
	}
	
}