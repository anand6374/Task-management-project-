package com.Project_Task_management.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "task_info")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name="project_name")
    private String projectname;
    @Column(name="project_requirement")
    private String projectrequirement;
    @Column(name = "project_client_name")
    private String projectclientname;
    @Column(name="project_managername")
    private String managername;
    @Column(name = "project_developer_name")
    private String developername;
    @Column(name = "project_time_period")
    private String timeperiod;
    @Column(name = "project_start_date")
    private String startdate;
    @Column(name = "project_deadline")
    private String deadline;
public Task(){

}
    public Task(String projectname,String projectrequirement,String projectclientname,String managername,String developername,String timeperiod,String startdate,String deadline){
        this.projectname=projectname;
        this.projectrequirement=projectrequirement;
        this.projectclientname=projectclientname;
        this.managername=managername;
        this.developername=developername;
        this.timeperiod=timeperiod;
        this.startdate=startdate;
        this.deadline=deadline;
    }
    public void setId(Long id) {
       this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getProjectname() {
        return projectname;
    }

    public void setProjectname(String projectname) {
        this.projectname = projectname;
    }

    public String getProjectrequirement() {
        return projectrequirement;
    }

    public void setProjectrequirement(String projectrequirement) {
        this.projectrequirement = projectrequirement;
    }

    public String getProjectclientname() {
        return projectclientname;
    }

    public void setProjectclientname(String projectclientname) {
        this.projectclientname = projectclientname;
    }

    public String getManagername() {
        return managername;
    }

    public void setManagername(String managername) {
        this.managername = managername;
    }

    public String getDevelopername() {
        return developername;
    }

    public void setDevelopername(String developername) {
        this.developername = developername;
    }

    public String getTimeperiod() {
        return timeperiod;
    }

    public void setTimeperiod(String timeperiod) {
        this.timeperiod = timeperiod;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public String getStartdate() {
        return startdate;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }
}
