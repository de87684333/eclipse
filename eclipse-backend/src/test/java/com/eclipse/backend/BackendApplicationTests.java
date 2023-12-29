package com.eclipse.backend;

import org.junit.jupiter.api.Test;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	private static final DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
			.withZone(ZoneId.systemDefault());

	@Test
	void shouldReturnAPeriodOfSevenDaysInHourlyFormatByDefault() throws Exception {
		this.mockMvc.perform(get("/market")).andExpect(status().isOk())
				.andExpect(jsonPath("$").isArray())
				.andExpect(jsonPath("$", hasSize(7 * 24)));
	}

	@Test
	void shouldReturnAPeriodOfTenDaysInHourlyFormatWhenTenDaysRequested() throws Exception {
		this.mockMvc.perform(get("/market?period=10")).andExpect(status().isOk())
				.andExpect(jsonPath("$").isArray())
				.andExpect(jsonPath("$", hasSize(10 * 24)));
	}

	@Test
	void shouldReturnDataFromNowByDefault() throws Exception {
		var expectedStartDate = dateFormatter.format(Instant.now());

		this.mockMvc.perform(get("/market")).andExpect(status().isOk())
				.andExpect(jsonPath("$[0].timestamp", containsString(expectedStartDate)));
	}

	@Test
	void shouldReturnDataFromSpecifiedDate() throws Exception {
		var date = "2020-05-30T12:05:10Z";
		var expectedStartDate = dateFormatter.format(Instant.parse(date));

		this.mockMvc.perform(get("/market?date=" + date)).andExpect(status().isOk())
				.andExpect(jsonPath("$[0].timestamp", containsString(expectedStartDate)));
	}

}
