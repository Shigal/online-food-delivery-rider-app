package com.fooddeliverysystem.riderservice.controller;

import com.fooddeliverysystem.riderservice.config.JwtTokenHelper;
import com.fooddeliverysystem.riderservice.model.*;
import com.fooddeliverysystem.riderservice.repository.RiderRepository;
import com.fooddeliverysystem.riderservice.service.RiderServiceImpl;
import org.apache.kafka.common.errors.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenHelper jwtTokenHelper;

    @Autowired
    private RiderServiceImpl riderService;

    @Autowired
    private RiderRepository riderRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody JwtRequest authenticationRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {
        final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        Rider rider = (Rider)authentication.getPrincipal();
        String jwtToken = jwtTokenHelper.generateToken(rider.getUsername());
        JwtResponse loginResponse = new JwtResponse(jwtToken);

        return ResponseEntity.ok(loginResponse);

    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public Rider createRider(@RequestBody RiderProfile signupRequest){
        List<Authority> authorityList=new ArrayList<>();
        authorityList.add(createAuthority("ADMIN","Admin role"));
        Rider rider = new Rider();
        rider.setEmail(signupRequest.getEmail());
        rider.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        rider.setUsername(signupRequest.getUsername());
        rider.setFirstName(signupRequest.getFirstName());
        rider.setLastName(signupRequest.getLastName());
        rider.setContact(signupRequest.getContact());
        rider.setLicense(signupRequest.getLicense());
        rider.setAuthorities(authorityList);
        return riderRepository.save(rider);
    }


    @RequestMapping(value = "/profile/{id}", method = RequestMethod.GET)
    public ResponseEntity<Rider> getRiderById(@PathVariable("id") long id){
        Rider rider = riderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No Rider exists with id: " + id));
        return ResponseEntity.ok(rider);
    }

    @RequestMapping(value = "/profile/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Rider> updateRider(@RequestBody Rider rider, @PathVariable("id") long id) {
        Rider updatedRider = riderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No Rider exists with id: " + id));
        updatedRider.setFirstName(rider.getFirstName());
        updatedRider.setLastName(rider.getLastName());
        updatedRider.setContact(rider.getContact());
        updatedRider.setLicense(rider.getLicense());
        updatedRider.setEmail(rider.getEmail());
        riderRepository.save(updatedRider);
        return ResponseEntity.ok(updatedRider);
    }


    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public ResponseEntity<?> fetchProfile(Principal user){
        MessageResponse message = new MessageResponse();
        RiderProfile riderProfile = new RiderProfile();
        try {
            Rider rider = (Rider) riderService.loadUserByUsername(user.getName());
            riderProfile.setId(rider.getId());
            riderProfile.setFirstName(rider.getFirstName());
            riderProfile.setLastName(rider.getLastName());
            riderProfile.setUsername(rider.getUsername());
            riderProfile.setEmail(rider.getEmail());
            riderProfile.setLicense(rider.getLicense());
            riderProfile.setContact(rider.getContact());
            message.setMessage("Rider profile is available");
            return ResponseEntity.ok(riderProfile);
        }
        catch (Exception e) {
            message.setMessage(e.getMessage());
            return ResponseEntity.ok(message);
        }
    }

    private Authority createAuthority(String roleCode,String roleDescription) {
        Authority authority=new Authority();
        authority.setRoleCode(roleCode);
        authority.setRoleDescription(roleDescription);
        return authority;
    }

}

