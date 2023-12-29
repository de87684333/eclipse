package com.eclipse.backend.repositories;

import com.eclipse.backend.dto.DataDto;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoField;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.random;
import static java.lang.Math.round;


@Repository
public class DataRepository {
    public List<DataDto> get(Instant start_date, int days) {
        List<DataDto> data = new ArrayList<>();
        Instant current_time = start_date;

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'")
                .withZone(ZoneId.systemDefault());

        for (int i = 0; i < days * 24; i++) { // days * 24 hours
            double price = round(30 + (10 * random())); // Random price between 30 to 40

            double demand = round(500 + (200 * random()));  //Random demand between 500 to 700
            double supply = round(demand + (50 * random()));  //Supply slightly higher than demand

            String date = formatter.format(current_time);
            data.add(new DataDto(date, price, demand, supply));

            current_time = current_time.plus(1, ChronoUnit.HOURS);
        }

        return data;
    }
}
