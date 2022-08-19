package com.nagarro.training.shopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nagarro.training.shopping.entities.Serviceability;

public interface ServiceabilityRepo extends JpaRepository<Serviceability, Integer> {
	
	@Query("select p.pincodes from Serviceability p where p.product.id=:id")
	public String getByProduct_id(@Param("id") int id);
}
