package com.fooddeliverysystem.riderservice.listener;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fooddeliverysystem.riderservice.model.Order;
import com.fooddeliverysystem.riderservice.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.text.ParseException;



@Service
public class KafkaConsumer {

    final String groupIdValue = "mygroup";

    @Autowired
    OrderRepository orderRepository;

    @KafkaListener(topics="orderStatusChange", groupId= groupIdValue)
    public void consumeFromOrderStatusChange(String msg) throws JsonProcessingException {
        System.out.println(msg);
        Order order = new ObjectMapper().readValue(msg, Order.class);
        try {
            orderRepository.save(order);
            System.out.println("Order Status Changed Successfully");
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
