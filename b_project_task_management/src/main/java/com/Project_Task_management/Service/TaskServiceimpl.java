package com.Project_Task_management.Service;

import com.Project_Task_management.DTO.Taskdto;
import com.Project_Task_management.Entity.Employee;
import com.Project_Task_management.Entity.Task;
import com.Project_Task_management.repositories.EmployeeRepository;
import com.Project_Task_management.repositories.Taskrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class TaskServiceimpl implements TaskService{
    @Autowired
    private Taskrepository taskrepository;

    @Override
    public String savetaskdata(Taskdto taskdto){
        Task task =new Task(taskdto.getProjectname(),taskdto.getProjectrequirement(),taskdto.getProjectclientname(),taskdto.getManagername(),taskdto.getDevelopername(),taskdto.getTimeperiod(),taskdto.getStartdate(),taskdto.getDeadline());
        Task saveTask =taskrepository.save(task);
        return String.valueOf(task.getId());// it connection to string
    }
    @Override
    public List<Taskdto> display() {

        List<Task> tasks = taskrepository.findAll();
        List<Taskdto> taskDtos = new ArrayList<>();

        for (Task task : tasks) {
            Taskdto taskDto = new Taskdto();
            taskDto.setProjectname(task.getProjectname());
            taskDto.setProjectrequirement(task.getProjectrequirement());
            taskDto.setProjectclientname(task.getProjectclientname());
            taskDto.setManagername(task.getManagername());
            taskDto.setDevelopername(task.getDevelopername());
            taskDto.setTimeperiod(task.getTimeperiod());
            taskDto.setStartdate(task.getStartdate());
            taskDto.setDeadline(task.getDeadline());

            taskDtos.add(taskDto);
        }
        return taskDtos;
    }

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Taskdto> getTasksForEmployee(String name) {
        Employee employee = employeeRepository.findByName(name);

        List<Taskdto> taskDtos = new ArrayList<>();

        if (employee != null) {
            List <Task> tasks =taskrepository.findByDevelopernameOrManagername( employee.getName(),employee.getName());
            for(Task task:tasks)   {
                Taskdto taskDto = new Taskdto();
                taskDto.setProjectname(task.getProjectname());
                taskDto.setProjectrequirement(task.getProjectrequirement());
                taskDto.setProjectclientname(task.getProjectclientname());
                taskDto.setManagername(task.getManagername());
                taskDto.setDevelopername(task.getDevelopername());
                taskDto.setTimeperiod(task.getTimeperiod());
                taskDto.setStartdate(task.getStartdate());
                taskDto.setDeadline(task.getDeadline());
   taskDtos.add(taskDto);

            }
        }
        else {
           System.out.println("error");
        }

        return taskDtos;
    }
    @Override
    public String updatetask(Taskdto taskdto){
        if(taskrepository.existsById(taskdto.getId())){
          Task task= taskrepository.getById(taskdto.getId());
            task.setProjectname(taskdto.getProjectname());
            task.setProjectrequirement(taskdto.getProjectrequirement());
            task.setProjectclientname(taskdto.getProjectclientname());
            task.setManagername(taskdto.getManagername());
            task.setDevelopername(taskdto.getDevelopername());
            task.setTimeperiod(taskdto.getTimeperiod());
            task.setStartdate(taskdto.getStartdate());
            task.setDeadline(taskdto.getDeadline());
            taskrepository.save(task);
        }
        else {
            System.out.println("it not present in the database");
        }
        return null;
    }
}
