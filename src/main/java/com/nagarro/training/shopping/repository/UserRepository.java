package com.nagarro.training.shopping.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.training.shopping.entities.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	
	User findByUsername(String username);

}
