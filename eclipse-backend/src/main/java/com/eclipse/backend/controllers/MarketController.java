package com.eclipse.backend.controllers;

import com.eclipse.backend.dto.DataDto;
import com.eclipse.backend.repositories.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MarketController {

    private final DataRepository dataRepository;

    @Autowired
    public MarketController(DataRepository priceRepository) {
        this.dataRepository = priceRepository;
    }

    @GetMapping("/market")
    List<DataDto> market(@RequestParam(required = false) String date, @RequestParam(defaultValue = "7") Integer period) {

        var dateInstant = Instant.now();
        if(date != null) {
            dateInstant = Instant.parse(date);
        }

        return dataRepository.get(dateInstant, period);
    }
}
