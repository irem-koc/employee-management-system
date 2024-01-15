package dev.ikoc.employeems.business.abstracts;

import java.util.List;

import org.springframework.http.ResponseEntity;

import dev.ikoc.employeems.business.requests.CreateEmployeeRequest;
import dev.ikoc.employeems.business.requests.UpdateEmployeeRequest;
import dev.ikoc.employeems.business.responses.GetAllEmployeeResponse;
import dev.ikoc.employeems.business.responses.GetByIdResponse;
import dev.ikoc.employeems.entities.concretes.Employee;

public interface EmployeeService {

    ResponseEntity<String> createEmployee(CreateEmployeeRequest createEmployeeRequest);

    List<GetAllEmployeeResponse> getEmployees();

    ResponseEntity<String> deleteEmployee(int id);
    
    GetByIdResponse getEmployee(int id);

    Employee updateEmployee(UpdateEmployeeRequest updateEmployeeRequest, int id);
}
