package com.nagarro.training.shopping.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.training.shopping.entities.Product;
import com.nagarro.training.shopping.repository.ProductRepository;
import com.nagarro.training.shopping.repository.ServiceabilityRepo;

@RestController
public class ProductController {

	List<Product> products = new ArrayList<>();
	@Autowired
	ProductRepository productRepository;

	@Autowired
	ServiceabilityRepo serviceabilityRepo;
	
	@PostMapping(value = "/addProd", consumes = { "application/json" })
	public Product addProduct(@RequestBody Product product) {

		return productRepository.save(product);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/searchProd/{word}")
	public List<Product> getProd(@PathVariable("word") String word) {
		products = productRepository.getSearchProduct(word);
		return products;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/service/{id}",produces = "application/json")
	@ResponseBody
	public String[] getPincodes(@PathVariable("id") int id) {
		String[] pincodes=serviceabilityRepo.getByProduct_id(id).split(",");
		return pincodes ;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/details/{id}")
	public Optional<Product> getProductById(@PathVariable("id") int id) {
		return productRepository.findById(id);
	}
}
