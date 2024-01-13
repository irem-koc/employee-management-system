package dev.ikoc.employeems.webApi.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ikoc.employeems.business.abstracts.EmployeeService;
import dev.ikoc.employeems.business.requests.CreateEmployeeRequest;
import dev.ikoc.employeems.business.responses.GetAllEmployeeResponse;
import lombok.AllArgsConstructor;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
@AllArgsConstructor
public class EmployeeController {
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public List<GetAllEmployeeResponse> getEmployees() {
        return employeeService.getEmployees();
    }
    @PostMapping("/employees")    
    public ResponseEntity<String> createEmployee(@RequestBody CreateEmployeeRequest createEmployeeRequest) {
        employeeService.createEmployee(createEmployeeRequest);
        return ResponseEntity.ok().body("Employee created !");
    }
    

}
