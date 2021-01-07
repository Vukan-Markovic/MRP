package com.ausp.mrp.reps;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ausp.mrp.jpa.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}