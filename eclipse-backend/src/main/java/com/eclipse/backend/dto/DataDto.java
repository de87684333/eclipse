package com.eclipse.backend.dto;


public class DataDto {
    public String timestamp;
    public double price;
    public double demand;
    public double supply;

    public DataDto(String timestamp, double price, double demand, double supply) {
        this.timestamp = timestamp;
        this.price = price;
        this.demand = demand;
        this.supply = supply;
    }
}
