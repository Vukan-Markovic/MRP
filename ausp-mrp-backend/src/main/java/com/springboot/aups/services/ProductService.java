package com.springboot.aups.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.aups.dto.ProductDTO;
import com.springboot.aups.models.PartOfProduct;
import com.springboot.aups.models.Product;
import com.springboot.aups.models.Warehouse;
import com.springboot.aups.models.WarehouseProduct;
import com.springboot.aups.repository.PartOfProductRepository;
import com.springboot.aups.repository.ProductRepository;

@Service
public class ProductService {
	
	public List<Product> getAllData(){
		return pr.findAll();
	}
	
	// prikaz svih proizvoda u skladistu
	@Autowired
	private ProductRepository pr;
	@Autowired
	private WarehouseProductService ws;
	@Autowired
	private WarehouseService whs;
	
	public List<ProductDTO> getAllProducts() {
		List<Product> ret = pr.findAll();
		List<WarehouseProduct> data = ws.getAllData();
		List<ProductDTO> retList = new ArrayList<ProductDTO>();
		List<Warehouse> warehouses = whs.getAll();
		for (WarehouseProduct warehouseProduct : data) {
			for (Product product : ret) {
				if(product.getProductKey()==warehouseProduct.getProductKey()) {
					String name = whs.getName((long) warehouseProduct.getIdWarehouse());
					ProductDTO newProduct = new ProductDTO(name, product.getProductKey(),product.getNameProduct(),product.getPriceProduct(),warehouseProduct.getQuantity());
					retList.add(newProduct);
				}
			}
		}
		
		return retList;
	}
}
