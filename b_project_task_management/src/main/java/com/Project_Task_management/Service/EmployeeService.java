package com.Project_Task_management.Service;


import com.Project_Task_management.DTO.Employeedto;
import com.Project_Task_management.Entity.Employee;

import java.util.List;

public interface EmployeeService  {
    String SaveEmployee(Employeedto employeedto);

    boolean EmployeeLogin(String name, String password,String role);

    List<Employeedto> EmployeedataDisplay();

    List<Employeedto>  DisplayparticularEmployeedata(String name, String role);

    String updateEmployee(Employeedto employeedto);



}
