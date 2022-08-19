package com.nagarro.training.shopping.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthController {

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/auth")
	public String auth() {
		return "true";
	}
}
