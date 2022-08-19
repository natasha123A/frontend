package com.nagarro.training.shopping.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "store")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String brand;
	String title;
	String details;
	double price;
	int rating;
	String image;
	
	@OneToOne(mappedBy = "product")
	private Serviceability serviceability;

	public Product() {
		super();
	}

	public Product(String brand, String title, String details, double price, int rating, String image) {
		super();
		this.brand = brand;
		this.title = title;
		this.details = details;
		this.price = price;
		this.rating = rating;
		this.image = image;
	}

	public Product(int id, String brand, String title, String details, double price, int rating, String image) {
		super();
		this.id = id;
		this.brand = brand;
		this.title = title;
		this.details = details;
		this.price = price;
		this.rating = rating;
		this.image = image;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

}
