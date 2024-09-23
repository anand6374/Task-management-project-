package com.Project_Task_management.DTO;


import jakarta.persistence.Column;

public class Taskdto {
    private Long id;
    private String projectname;
    private String projectrequirement;
    private String projectclientname;
    private String managername;
    private String developername;
    private String timeperiod;
    private String startdate;
    private String deadline;
public  Taskdto(){

}
    public Taskdto(String projectname,String projectrequirement,String projectclientname,String managername,String developername,String timeperiod,String startdate,String deadline){
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
