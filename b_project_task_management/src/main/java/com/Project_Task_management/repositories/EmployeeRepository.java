package com.Project_Task_management.repositories;

import com.Project_Task_management.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface EmployeeRepository  extends JpaRepository<Employee,Long> {
    Optional<Employee> findByNameAndRoleAndPassword(String name,String role,
                                         String password);
    Employee findByName(String name);
List<Employee>  findByNameAndRole(String name,String role);

}
