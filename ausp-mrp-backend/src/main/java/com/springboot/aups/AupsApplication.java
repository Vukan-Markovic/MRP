package com.springboot.aups;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.springboot.aups.controller.MaterialController;
import com.springboot.aups.models.Employee;

@EnableJpaRepositories
@SpringBootApplication
public class AupsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AupsApplication.class, args);

		
	}

}
