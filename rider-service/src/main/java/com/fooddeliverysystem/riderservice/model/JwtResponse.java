package com.fooddeliverysystem.riderservice.model;

public class JwtResponse {

    private String token;

    public JwtResponse(String jwttoken) {
        this.token = jwttoken;
    }

    public String getToken() {
        return token;
    }

//    public void setToken(String token) {
//        this.token = token;
//    }
}
