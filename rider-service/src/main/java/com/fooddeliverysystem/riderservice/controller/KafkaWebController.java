package com.fooddeliverysystem.riderservice.controller;

import com.fooddeliverysystem.riderservice.model.Order;
import com.fooddeliverysystem.riderservice.model.Rider;
import com.fooddeliverysystem.riderservice.repository.OrderRepository;
import com.fooddeliverysystem.riderservice.service.KafkaProducerService;
import com.fooddeliverysystem.riderservice.service.RiderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/thekafka")
public class KafkaWebController {

    @Autowired
    private RiderServiceImpl riderService;

    @Autowired
    private KafkaProducerService kafkaProducerService;

    @Autowired
    OrderRepository orderRepository;


    @RequestMapping(value = "/publish/rider", method = RequestMethod.GET)
    public ResponseEntity<?> sendMessage(Principal user, @RequestBody Order order){
        Rider rider = (Rider) riderService.loadUserByUsername(user.getName());
        order.setRiderID(rider.getId());
        order.setRiderContactNumber(Integer.parseInt(rider.getContact()));
        order.setRiderName(rider.getFirstName() + " " + rider.getLastName());
        orderRepository.save(order);

        return ResponseEntity.ok(order);
    }

    @PutMapping("/orderStatusChange")
    public ResponseEntity<?> sendMessage(@RequestBody Order orderStatusChange) {
        kafkaProducerService.orderStatusChangeTopic(orderStatusChange);
        System.out.println("message sent");
//        MessageResponse messageResponse = new MessageResponse();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/order", method = RequestMethod.POST)
    public void saveOrder(@RequestBody Order order){
        orderRepository.save(order);
    }

    @RequestMapping(value = "/getorder", method = RequestMethod.GET)
    public List<Order> fetchOrder(){
        return orderRepository.findAll();
    }


}
