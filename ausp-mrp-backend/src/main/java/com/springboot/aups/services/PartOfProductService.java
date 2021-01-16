package com.springboot.aups.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.dto.PartOfProductDTO;
import com.springboot.aups.models.Material;
import com.springboot.aups.models.PartOfProduct;
import com.springboot.aups.models.Product;
import com.springboot.aups.repository.PartOfProductRepository;

@Service
public class PartOfProductService {
			// prikaz svih delova proizvoda i materijala potrebnih za proizvod
	
			@Autowired
			private PartOfProductRepository ppr;
			@Autowired
			private ProductService ps;
			@Autowired
			private MaterialService ms;
			
			public List<PartOfProductDTO> getAllParts() {
				List<Product> product = ps.getAllData();
				List<Material> materials = ms.getAllMaterials();
				List<PartOfProductDTO> listdto = new ArrayList<PartOfProductDTO>();
				List<PartOfProduct> parts = ppr.findAll();
				for (PartOfProduct partsofproducts : parts) {
					for (Product products : product) {
						if (products.getProductKey()==partsofproducts.getId()) {
							String name="";
							for (Material mat : materials) {
								if (mat.getId() == partsofproducts.getIdMaterial())
									name = mat.getNameMaterial();
							}
							PartOfProductDTO one = new PartOfProductDTO (partsofproducts.getId(), partsofproducts.getNamePartOfProduct(), partsofproducts.getDimensionsPartOfProduct(),
									partsofproducts.getIdMaterial(), name, products.getProductKey(), products.getNameProduct());
								listdto.add(one);	
								
						}
					}
				}
				
				return listdto;
			}
	
	public PartOfProduct addNew(PartOfProduct p) {
		return ppr.save(p);
	}
	
}
