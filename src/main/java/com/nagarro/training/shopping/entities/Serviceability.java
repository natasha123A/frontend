package com.nagarro.training.shopping.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="service")
public class Serviceability {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String pincodes;
	
	@OneToOne
	private Product product;

	
	public Serviceability() {
		super();
	}

	public Serviceability(int id, String pincodes, Product product) {
		super();
		this.id = id;
		this.pincodes = pincodes;
		this.product = product;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPincodes() {
		return pincodes;
	}

	public void setPincodes(String pincodes) {
		this.pincodes = pincodes;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	
}
