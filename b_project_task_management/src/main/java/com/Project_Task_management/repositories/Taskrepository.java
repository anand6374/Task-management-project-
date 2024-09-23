package com.Project_Task_management.repositories;

import com.Project_Task_management.Entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface Taskrepository extends JpaRepository<Task,Long> {
    List<Task> findByDevelopernameOrManagername(String developername, String managername);
}
