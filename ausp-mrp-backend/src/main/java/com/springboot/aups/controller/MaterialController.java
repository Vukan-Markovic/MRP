package com.springboot.aups.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.aups.models.Material;
import com.springboot.aups.services.MaterialService;

@RestController
@RequestMapping(value = "/material")
public class MaterialController {
	
	@Autowired
	private MaterialService ms;
	
	/*@GetMapping("")
	public String welcome() {
		return "Table material!";
	}*/
	
	@RequestMapping(value = "",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart() {
        return new ResponseEntity<>(ms.getAllMaterials(), HttpStatus.OK);
    }
	
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public Material newMaterial(@RequestBody Material request) {
        return ms.addNew(request);
    }
	@RequestMapping(value = "", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
    public Material updateMaterial(@RequestBody Material request) {
        return ms.addNew(request);
    }

	/*@RequestMapping(value = "name_material",method = RequestMethod.GET,produces = "application/json")
    public ResponseEntity<?> getCart(@RequestParam("name_material") String user) {
        return new ResponseEntity<>(ms.nadjiPoImenu(user), HttpStatus.OK);
    }*/

}
