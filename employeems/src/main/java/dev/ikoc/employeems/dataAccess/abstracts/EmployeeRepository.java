package dev.ikoc.employeems.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.ikoc.employeems.entities.concretes.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
    
}
