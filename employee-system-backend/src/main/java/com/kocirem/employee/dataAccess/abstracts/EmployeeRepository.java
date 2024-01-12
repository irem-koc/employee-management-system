package com.kocirem.employee.dataAccess.abstracts;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.kocirem.employee.entities.concretes.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, ObjectId> {
    
}
