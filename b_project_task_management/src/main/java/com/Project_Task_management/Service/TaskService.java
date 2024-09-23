package com.Project_Task_management.Service;

import com.Project_Task_management.DTO.Taskdto;

import java.util.List;

public interface TaskService {
    String savetaskdata(Taskdto taskdto);

    List<Taskdto> display();

    List<Taskdto> getTasksForEmployee(String name);

    String updatetask(Taskdto taskdto);
}
