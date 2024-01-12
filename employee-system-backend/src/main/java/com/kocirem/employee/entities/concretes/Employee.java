package com.kocirem.employee.entities.concretes;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document(collection = "employee")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    
    private ObjectId id;
    private String firstName;
    private String lastName;
    private String email;
}
