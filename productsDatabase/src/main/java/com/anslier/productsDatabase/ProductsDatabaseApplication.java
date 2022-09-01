package com.anslier.productsDatabase;

import com.anslier.productsDatabase.entity.Product;
import com.anslier.productsDatabase.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.security.acl.Owner;
import java.util.Arrays;

@SpringBootApplication
public class ProductsDatabaseApplication implements CommandLineRunner {

	// init logger
	private static final Logger logger = LoggerFactory.getLogger(ProductsDatabaseApplication.class);

	// main method
	public static void main(String[] args) {

		SpringApplication.run(ProductsDatabaseApplication.class, args);

		logger.info("Application started...");
	}

	// autowired product repository to manually add data into database
	@Autowired
	private ProductRepository productRepository;

	// init data into database
	@Override
	public void run(String... args) throws Exception {

		Product product1 = new Product("P001", "MASK ADULT Surgical 3 ply 50'S MEDICOS with box", "Health Accessories", "Medicos", "Hygiene", "Colour: Blue (ear loop outside, ear loop inside- random assigned), Green, Purple, White, Lime Green, Yellow, Pink");
		Product product2 = new Product("P002", "Party Cosplay Player Unknown Battlegrounds Clothes Hallowmas PUBG", "Men's Clothing", "No Brand", "", "Suitable for adults and children.");
		Product product3 = new Product("P003", "Xiaomi REDMI 8A Official Global Version 5000 mAh battery champion 31 days 2GB+32GB", "Mobile & Gadgets", "Xiaomi", "Mobile Phones", "Xiaomi Redmi 8A");
		Product product4 = new Product("P004", "Naelofar Sofis - Printed Square", "Hijab", "Naelofar", "Multi Colour Floral", "Ornate Iris flower composition with intricate growing foliage");
		Product product5 = new Product("P005", "Philips HR2051 / HR2056 / HR2059 Ice Crushing Blender Jar Mill", "Small Kitchen Appliances", "Philips", "Mixers & Blenders", "Philips HR2051 Blender (350W, 1.25L Plastic Jar, 4 stars stainless steel blade)");
		Product product6 = new Product("P006", "Gemei GM-6005 Rechargeable Trimmer Hair Cutter Machine", "Hair Styling Tools", "Gemei", "Trimmer", "The GEMEI hair clipper is intended for professional use.");
		Product product7 = new Product("P007", "Oreo Crumb Small Crushed Cookie Pieces 454g", "Snacks", "Oreo", "Biscuits & Cookies", "Oreo Crumb Small Crushed Cookie Pieces 454g - Retail & Wholesale New Stock Long Expiry!!!");
		Product product8 = new Product("P008", "Non-contact Infrared Forehead Thermometer ABS", "Kids Health & Skincare", "No Brand", "", "Non-contact Infrared Forehead Thermometer ABS for Adults and Children with LCD Display Digital");
		Product product9 = new Product("P009", "Nordic Marble Starry Sky Bedding Sets", "Bedding", "No Brand", "Bedding Sheets", "Printing process: reactive printing. Package：quilt cover ,bed sheet ,pillow case. Not include comforter or quilt.");
		Product product10 = new Product("P010", "Samsung Galaxy Tab A 10.1", "Mobile & Gadgets", "Samsung", "Tablets", "4GB RAM. - 64GB ROM. - 1.5 ghz Processor. - 10.1 inches LCD Display");
		Product product11 = new Product("P011", "REALME 5 PRO 6+128GB", "Mobile & Gadgets", "Realme", "Mobile Phones", "REALME 5 PRO 6+128GB");
		Product product12 = new Product("P012", "Nokia 2.3 - Cyan Green", "Mobile & Gadgets", "Nokia", "Mobile Phones", "Nokia smartphones get 2 years of software upgrades and 3 years of monthly security updates.");
		Product product13 = new Product("P013", "AKEMI Cotton Select Fitted Bedsheet Set - Adore 730TC", "Bedding", "Akemi", "Bedding Sheets", "100% Cotton Twill. Super Single.");
		Product product14 = new Product("P014", "Samsung Note10+ Phone", "Mobile & Gadgets", "OEM", "Mobile Phones", "OEM Phone Models");
		Product product15 = new Product("P015", "Keknis Basic Wide Long Shawl", "Hijab", "No Brand", "Plain Shawl", "1.8m X 0.7m (+/-). Heavy chiffon (120 gsm).");

		productRepository.saveAll(Arrays.asList(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15));

	}

}
