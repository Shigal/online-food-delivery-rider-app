package com.fooddeliverysystem.riderservice.repository;

import com.fooddeliverysystem.riderservice.model.Rider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RiderRepository extends JpaRepository<Rider, Long> {
    Rider findByUsername(String username);

//    boolean exitsByUsername(String username);
//
//    boolean existsByEmail(String email);
}
