import React, { useState } from 'react';
import axios from 'axios';
import './Employeergister.css';
import { Link, useNavigate } from 'react-router-dom';

function EmployeeRegistration() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [Email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();

  const Roles = ['Admin', 'Manager', 'Developer'];
  const options = ['Male', 'Female', 'Other'];

  function rolehandle(e) {
    setRole(e.target.value);
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // Input validation function
  const validateInputs = () => {
    if (!name || name.length < 3) {
      alert('Name must be at least 3 characters long');
      return false;
    }

    if (!Email) {
      alert('Please enter a valid email address');
      return false;
    }

    if (!password || password.length < 6) {
      alert('Password must be at least 6 characters long');
      return false;
    }

    if (!role) {
      alert('Please select a role');
      return false;
    }

    if (!gender) {
      alert('Please select a gender');
      return false;
    }

    if (!age || age < 18 || age > 65) {
      alert('Age must be between 18 and 65');
      return false;
    }

    if (!mobile || !/^\d{10}$/.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return false;
    }

    if (!street || street.length < 5) {
      alert('Street must be at least 5 characters long');
      return false;
    }

    if (!city) {
      alert('Please enter a city');
      return false;
    }

    if (!pincode || !/^\d{6}$/.test(pincode)) {
      alert('Please enter a valid 6-digit pincode');
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    const employeeData = {
      name,
      password,
      role,
      email: Email,
      gender,
      age,
      mobile,
      street,
      city,
      pincode,
    };

    try {
      const response = await axios.post(
        'http://localhost:8090/api/v1/employee/save',
        employeeData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data) {
        alert('Employee registered successfully');
       
        sessionStorage.setItem('rname',name);
        sessionStorage.setItem('rrole',role);
        if(role==="Manager"){
          navigate('/managerpage/home');
      }
      else if(role==="Developer"){
        navigate('/developerpage/developerhome');
      }
      else if(role==="Admin"){
        navigate('/adminpage/adminhome');
      }
        setName('');
        setPassword('');
        setRole('');
        setEmail('');
        setGender('');
        setAge('');
        setMobile('');
        setStreet('');
        setCity('');
        setPincode('');
      } else {
        alert('Error registering employee');
      }
    } catch (error) {
      alert('Error registering employee');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2 className='register'>Employee Registration</h2>
      <div className='container-register'>
        <div className='field'>
          <label className="r-name">Name</label>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='field'>
          <label className="r-password">Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='field'>
          <label className='r-role'>Role</label>
          <select name='role' value={role} onChange={rolehandle}>
            <option value='' disabled>
              Select Your Role
            </option>
            {Roles.map((roleOption, index) => (
              <option key={index} value={roleOption}>
                {roleOption}
              </option>
            ))}
          </select>
        </div>
        <div className='field'>
          <label className='r-email'>Email</label>
          <input
            type='text'
            placeholder='Email'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='field'>
          <label className='r-gender'>Gender</label>
          <select name='gender' value={gender} onChange={handleGenderChange}>
            <option value='' disabled>
              Select Gender
            </option>
            {options.map((genderOption, index) => (
              <option key={index} value={genderOption}>
                {genderOption}
              </option>
            ))}
          </select>
        </div>
        <div className='field'>
          <label className='r-age'>Age</label>
          <input
            type='number'
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className='field'>
          <label className='r-no'>Mobile No</label>
          <input
            type='text'
            placeholder='Mobile Number'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className='field'>
          <label className='r-street'>Street</label>
          <input
            type='text'
            placeholder='Street'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className='field'>
          <label className='r-city'>City</label>
          <input
            type='text'
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className='field'>
          <label className='r-pincode'>Pincode</label>
          <input
            type='text'
            placeholder='Pincode'
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <button className='r-button' onClick={handleRegister}>
          Register
        </button>
        <button className='r-Signbutton'>
          <Link to='/Employeelogin' className='Link'>
           Sign in
          </Link>
        </button>
      </div>
    </div>
  );
}

export default EmployeeRegistration;
