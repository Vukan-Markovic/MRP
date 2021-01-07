package com.ausp.mrp.services;

import org.springframework.beans.factory.annotation.Autowired;
import com.ausp.mrp.reps.UserRepository;

public class UserService {

	@Autowired
	private UserRepository userRepository;
}