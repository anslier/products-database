package com.anslier.productsDatabase.repository;

import com.anslier.productsDatabase.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

// auto rest api with spring data rest
// api path http://localhost:8080/api/products
@RepositoryRestResource
public interface ProductRepository extends CrudRepository<Product, Long> {
}
