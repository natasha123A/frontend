package com.nagarro.training.shopping.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.training.shopping.entities.User;
import com.nagarro.training.shopping.repository.UserRepository;


@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
//	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path = "/newuser")
	public User reguser(@RequestBody User user,HttpServletResponse response) {
		
		user.setRole("ROLE_USER");
		user.setEnabled(1);
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		
		return userRepository.save(user);
	}
	
	
	
}
