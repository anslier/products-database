package com.anslier.productsDatabase.configurations;

import com.anslier.productsDatabase.entity.Product;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

// to expose products id in rest api
@Configuration
public class RestConfiguration implements RepositoryRestConfigurer {

	@Override
	public void configureRepositoryRestConfiguration(
			RepositoryRestConfiguration repositoryRestConfiguration, CorsRegistry corsRegistry) {
		repositoryRestConfiguration.exposeIdsFor(Product.class);
	}
}
