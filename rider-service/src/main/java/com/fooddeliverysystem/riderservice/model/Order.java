package com.fooddeliverysystem.riderservice.model;

import com.fooddeliverysystem.riderservice.enums.OrderStatus;

import javax.persistence.*;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "ORDERS")
public class Order{

//    public enum OrderStatus{
//        WAITING_FOR_A_RIDER, RIDER_ACCEPTED, DELIVERING, DELIVERED, RIDER_CANCELLED;
//    }

    public Order(){

    }

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private long orderID;

    @Column(name = "customer_id")
    private long customerID;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "customer_address")
    private String customerAddress;

    @Column(name = "order_date")
    private String orderDate = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss").format(new Date());

    @Column(name = "restaurant_id")
    private long restaurantID;

    @Column(name = "restaurant_name")
    private String restaurantName;

    @Column(name = "restaurant_location")
    private String restaurantLocation;

    @Column(name = "rider_id")
    private long riderID;

    @Column(name = "rider_name")
    private String riderName;

    @Column(name = "rider_contact")
    private int riderContactNumber;

    @Column(name = "total")
    private double totalPrice;

    @Column(name = "is_paid")
    private boolean isPaid;

    @Enumerated(EnumType.STRING)
    @Column(name = "order_status")
    private com.fooddeliverysystem.riderservice.enums.OrderStatus orderStatus;

//    @Column(name = "order_status")
//    private String orderStatus = String.valueOf(OrderStatus.PENDING);

//    @Column(name = "order_status")
//    @Enumerated(EnumType.STRING)

    public void setOrderID(long orderID) {
        this.orderID = orderID;
    }
//    private OrderStatus orderStatus;

    public long getOrderID() {
        return orderID;
    }

//    public void setOrderId(long orderID) {
//        this.orderID = orderID;
//    }

    public long getCustomerID() {
        return customerID;
    }

    public void setCustomerID(long customerID) {
        this.customerID = customerID;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public long getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(long restaurantID) {
        this.restaurantID = restaurantID;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantLocation() {
        return restaurantLocation;
    }

    public void setRestaurantLocation(String restaurantLocation) {
        this.restaurantLocation = restaurantLocation;
    }

    public long getRiderID() {
        return riderID;
    }

    public void setRiderID(long riderID) {
        this.riderID = riderID;
    }

    public String getRiderName() {
        return riderName;
    }

    public void setRiderName(String riderName) {
        this.riderName = riderName;
    }

    public int getRiderContactNumber() {
        return riderContactNumber;
    }

    public void setRiderContactNumber(int riderContactNumber) {
        this.riderContactNumber = riderContactNumber;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public boolean isPaid() {
        return isPaid;
    }

    public void setPaid(boolean paid) {
        isPaid = paid;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    //    public OrderStatus getOrderStatus() {
//        return orderStatus;
//    }

//    public void setOrderStatus(OrderStatus status) {
//        this.orderStatus = orderStatus;
//    }
}

