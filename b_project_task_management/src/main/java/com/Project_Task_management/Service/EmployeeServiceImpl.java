package com.Project_Task_management.Service;

import com.Project_Task_management.DTO.Employeedto;

import com.Project_Task_management.Entity.Employee;

import com.Project_Task_management.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public String SaveEmployee(Employeedto employeedto) {
        Employee employee;
        employee = new Employee(employeedto.getName(),employeedto.getPassword(),employeedto.getRole(),employeedto.getEmail(),employeedto.getGender(),employeedto.getAge(),employeedto.getMobile(),employeedto.getStreet(),employeedto.getCity(),employeedto.getPincode());

        Employee savedEmployee = employeeRepository.save(employee);
        return String.valueOf(savedEmployee.getId());//it used to save get int or other data type is used tostring to chnage String value.
}


    @Override
    public boolean EmployeeLogin(String name,  String role,String password) {
        Optional<Employee> employeeOpt = employeeRepository.findByNameAndRoleAndPassword(name,role,password);
        return employeeOpt.isPresent() && employeeOpt.get().getPassword().equals(password);
    }

    @Override
    public List<Employeedto>   EmployeedataDisplay()
    {
        List<Employee>   employees= employeeRepository.findAll();
       List<Employeedto> employeedtos= new ArrayList<>();
        for(Employee employee:employees){
            Employeedto employeedto= new Employeedto();
            employeedto.setName(employee.getName());
            employeedto.setPassword(employee.getPassword());
            employeedto.setRole(employee.getRole());
            employeedto.setEmail(employee.getEmail());
            employeedto.setGender(employee.getGender());
            employeedto.setAge(employee.getAge());
            employeedto.setMobile(employee.getMobile());
            employeedto.setStreet(employee.getStreet());
            employeedto.setCity(employee.getCity());
            employeedto.setPincode(employee.getPincode());
            employeedtos.add(employeedto);
        }
        return employeedtos;
    }

    @Override
    public  List<Employeedto>  DisplayparticularEmployeedata(String name,String role){
        List<Employeedto>  collectemployeedata = new ArrayList<>();

 List<Employee > employee  =employeeRepository.findByNameAndRole(name,role);
           for(Employee employees:employee){
               Employeedto setemployee= new Employeedto();
               setemployee.setName(employees.getName());
               setemployee.setRole(employees.getRole());
               setemployee.setGender(employees.getGender());
               setemployee.setEmail(employees.getEmail());
               setemployee.setAge(employees.getAge());
               setemployee.setMobile(employees.getMobile());
               setemployee.setStreet(employees.getStreet());
               setemployee.setCity(employees.getCity());
               setemployee.setPincode(employees.getPincode());
               collectemployeedata.add(setemployee);
           }
           return collectemployeedata;
    }

    @Override
    public String updateEmployee(Employeedto employeedto){
            if(employeeRepository.existsById(employeedto.getId())) {
                 Employee employee    =employeeRepository.getById(employeedto.getId());
                employee.setName(employeedto.getName());
                employee.setRole(employeedto.getRole());
                employee.setGender(employeedto.getGender());
                employee.setEmail(employeedto.getEmail());
                employee.setAge(employeedto.getAge());
                employee.setMobile(employeedto.getMobile());
                employee.setStreet(employeedto.getStreet());
                employee.setCity(employeedto.getCity());
                employee.setPincode(employeedto.getPincode());
                employeeRepository.save(employee);

            }else {
                System.out.println("it not present in database");
            }
            return null;
    }
// i will study
}
