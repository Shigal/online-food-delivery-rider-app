package com.fooddeliverysystem.riderservice.service;

import com.fooddeliverysystem.riderservice.model.Order;
import com.fooddeliverysystem.riderservice.model.RiderProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {


    public static final String topic = "orderStatusChange";

    @Autowired
    private KafkaTemplate<String, Order> kafkaOrderStatus;

    public void orderStatusChangeTopic(Order orderStatusChange) {
        this.kafkaOrderStatus.send(topic,orderStatusChange);
    }

}
