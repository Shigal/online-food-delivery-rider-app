package com.fooddeliverysystem.riderservice.model;

public class JwtRequest {

    private String username;
    private String password;

    //need default constructor for JSON Parsing
    public JwtRequest()
    {

    }
    public JwtRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

}
