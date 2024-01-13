package dev.ikoc.employeems.webApi.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoc.employeems.business.abstracts.EmployeeService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/")
@AllArgsConstructor
public class EmployeeController {
    private EmployeeService employeeService;

}
