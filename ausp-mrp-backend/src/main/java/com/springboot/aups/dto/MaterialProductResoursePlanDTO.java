package com.springboot.aups.dto;

public class MaterialProductResoursePlanDTO {
	
		// klasa za  cuvanje porudzbine materijala kupca
		// medjutabela materijal-plan resursa plan i tabela plan resursa
		private Long id;
		private Long idMaterial;
		private int neededQuantityOfMaterial;
		
		public MaterialProductResoursePlanDTO(Long id, Long idMaterial, int quantity) {
			this.id = id;
			this.idMaterial = idMaterial;
			this.neededQuantityOfMaterial = quantity;
		}

}
