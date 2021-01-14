package com.springboot.aups.models;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter @ToString 
@Table(name = "employee")
public class Employee {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String jmbg;
	private String first_name;
	private String last_name;
	private String address;
	private String contact;
	private String email;
	private String username;
	private String password;
	private Long idWorkplace;

}
