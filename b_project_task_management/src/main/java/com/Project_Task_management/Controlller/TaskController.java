package com.Project_Task_management.Controlller;

import com.Project_Task_management.DTO.Taskdto;
import com.Project_Task_management.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("api/v1/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping(path = "/savetask")
    public String SaveTask(@RequestBody Taskdto taskdto){
       String id= taskService.savetaskdata(taskdto);
       return id;
    }

    @GetMapping(path = "/displaytask")
    public List<Taskdto>  displaytask(){
      return taskService.display();
    }

    @GetMapping("/employee/{employee_name}")
    public List<Taskdto> getTasksFordiplaycorrectEmployee(@PathVariable("employee_name") String employeeName) {
        System.out.println(employeeName);
        return taskService.getTasksForEmployee(employeeName);

    }
@PutMapping(path="/updatetask")
    public String updatetask(@RequestBody Taskdto taskdto){
    String  id  =taskService.updatetask(taskdto);
    return  id;
}
}