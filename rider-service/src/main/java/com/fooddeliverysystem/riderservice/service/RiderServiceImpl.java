package com.fooddeliverysystem.riderservice.service;

import com.fooddeliverysystem.riderservice.model.Rider;
import com.fooddeliverysystem.riderservice.repository.RiderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class RiderServiceImpl  implements UserDetailsService {

    @Autowired
    RiderRepository riderRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Rider rider = riderRepository.findByUsername(username);
        if(rider == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return  rider;
    }


}

