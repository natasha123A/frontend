package com.nagarro.training.shopping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nagarro.training.shopping.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	@Query("select p from Product p where p.title like %:word% or p.brand like %:word% or p.details like %:word%")
	public List<Product> getSearchProduct(@Param("word") String word);

}
