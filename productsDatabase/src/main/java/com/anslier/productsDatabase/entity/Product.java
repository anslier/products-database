package com.anslier.productsDatabase.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
// table name product in mariadb
public class Product {

	// auto increment id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// attributes
	private String code;
	private String name;
	private String category;
	private String brand;
	private String type;
	private String description;

	// constructors
	public Product() {
	}

	public Product(String code, String name, String category, String brand, String type, String description) {
		this.code = code;
		this.name = name;
		this.category = category;
		this.brand = brand;
		this.type = type;
		this.description = description;
	}

	// getters and setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	// toString method
	@Override
	public String toString() {
		return "Product{" +
				"id=" + id +
				", code='" + code + '\'' +
				", name='" + name + '\'' +
				", category='" + category + '\'' +
				", brand='" + brand + '\'' +
				", type='" + type + '\'' +
				", description='" + description + '\'' +
				'}';
	}
}
