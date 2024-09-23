package com.Project_Task_management.DTO;

public class Employeedto {
    private  Long id;
    private String name;
    private String password;
    private String role;
    private String email;
    private String gender;
    private Integer age;
    private Long mobile;
    private String street;
    private String city;
    private String pincode;

    public Employeedto() {
    }

    public Employeedto(String name, String password, String role, String email, String gender, Integer age, Long mobile, String street, String city, String pincode) {
        this.name = name;
        this.password = password;
        this.role = role;
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.mobile = mobile;
        this.street = street;
        this.city = city;
        this.pincode = pincode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public Long getMobile() { return mobile; }
    public void setMobile(Long mobile) { this.mobile = mobile; }

    public String getStreet() { return street; }
    public void setStreet(String street) { this.street = street; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = pincode; }

}
