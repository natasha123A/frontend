package com.nagarro.training.shopping.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String role;
	String username;
	String password;
	String email;
	int age;
	Date dob;
	int enabled;


	public User() {
		super();
	}

	public User(String role, String username, String password, String email, int age, Date dob, int enabled) {
		super();
		this.role = role;
		this.username = username;
		this.password = password;
		this.email = email;
		this.age = age;
		this.dob = dob;
		this.enabled = enabled;
	}

	public User(int id, String role, String username, String password, String email, int age, Date dob,
		int enabled) {
		super();
		this.id = id;
		this.role = role;
		this.username = username;
		this.password = password;
		this.email = email;
		this.age = age;
		this.dob = dob;
		this.enabled = enabled;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getEnabled() {
		return enabled;
	}

	public void setEnabled(int enabled) {
		this.enabled = enabled;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", role=" + role + ", username=" + username + ", password=" + password + ", email="
				+ email + ", age=" + age + ", dob=" + dob + ", enabled=" + enabled + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

}
