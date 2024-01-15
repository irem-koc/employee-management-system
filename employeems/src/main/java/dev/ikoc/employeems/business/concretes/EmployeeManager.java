package dev.ikoc.employeems.business.concretes;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import dev.ikoc.employeems.business.abstracts.EmployeeService;
import dev.ikoc.employeems.business.requests.CreateEmployeeRequest;
import dev.ikoc.employeems.business.responses.GetAllEmployeeResponse;
import dev.ikoc.employeems.core.utils.mappers.MapperService;
import dev.ikoc.employeems.dataAccess.abstracts.EmployeeRepository;
import dev.ikoc.employeems.entities.concretes.Employee;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeManager implements EmployeeService {
    private EmployeeRepository employeeRepository;
    private MapperService mapperService;
    @Override
    public ResponseEntity<String> createEmployee(CreateEmployeeRequest createEmployeeRequest) {
        Employee employee = this.mapperService.forRequest().map(createEmployeeRequest, Employee.class);
        this.employeeRepository.save(employee);
        return ResponseEntity.ok().body("Employee created successfully");
    }
    @Override
    public List<GetAllEmployeeResponse> getEmployees() {
        List<Employee> employees = this.employeeRepository.findAll();
        List<GetAllEmployeeResponse> employeesResponse = employees.stream()
                .map(brand -> this.mapperService.forResponse().map(brand, GetAllEmployeeResponse.class))
                .collect(Collectors.toList());

        return employeesResponse;
    }
    @Override
    public ResponseEntity<String> deleteEmployee(int id) {
        this.employeeRepository.deleteById(id);
        return ResponseEntity.ok().body("Employee deleted successfully");
    }
    
}
