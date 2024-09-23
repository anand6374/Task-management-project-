package com.Project_Task_management.Controlller;

import com.Project_Task_management.DTO.Employeedto;
import com.Project_Task_management.Entity.Employee;
import com.Project_Task_management.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("api/v1/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = "/save")
    public String employeeRegister(@RequestBody Employeedto employeedto) {// if i miss the body  the not store the database.
        System.out.println("Received DTO: " + employeedto.getName() + " " + employeedto.getPassword()+" "+employeedto.getEmail()+" "+employeedto.getMobile());//check the data flow
        String id = employeeService.SaveEmployee(employeedto);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<String> login(@RequestBody Employeedto loginRequestDTO) {
        if (employeeService.EmployeeLogin(loginRequestDTO.getName(), loginRequestDTO.getRole(),loginRequestDTO.getPassword())) {
            System.out.println("Welcome " + loginRequestDTO.getName());
            return ResponseEntity.ok("Welcome " + loginRequestDTO.getName());

        }

        return ResponseEntity.status(401).body("Invalid credentials");
    }
@GetMapping(path = "/displayemployee")
    public List<Employeedto>  display(){
        return employeeService.EmployeedataDisplay();
}
@GetMapping(path = "/getparticularemployee/{name}/{role}")// name and role match get and display
public  List<Employeedto>   getparticularemployee(@PathVariable("name") String name,@PathVariable("role") String role){
        return employeeService.DisplayparticularEmployeedata(name,role);
}
@PutMapping(path = "/updateemployee")
    public String update (@RequestBody Employeedto employeedto){
         String id=employeeService.updateEmployee(employeedto);
         return id;
}
}
