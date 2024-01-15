package dev.ikoc.employeems.business.abstracts;

import java.util.List;

import org.springframework.http.ResponseEntity;

import dev.ikoc.employeems.business.requests.CreateEmployeeRequest;
import dev.ikoc.employeems.business.responses.GetAllEmployeeResponse;

public interface EmployeeService {

    ResponseEntity<String> createEmployee(CreateEmployeeRequest createEmployeeRequest);

    List<GetAllEmployeeResponse> getEmployees();

    ResponseEntity<String> deleteEmployee(int id);
    
}
