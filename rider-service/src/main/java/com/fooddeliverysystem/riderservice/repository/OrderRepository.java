package com.fooddeliverysystem.riderservice.repository;

import com.fooddeliverysystem.riderservice.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
