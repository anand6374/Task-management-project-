import { useState } from "react";
import emailjs from '@emailjs/browser';
import './Gmail.css';
function Gmail() {
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [roles, setRoles] = useState("");
    const [message, setMessage] = useState("");
const[gmail,setgmail]= useState("");
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const serviceId = 'service_nyaa6qp';
        const templateId = 'template_g5wiqhn';
        const publicKey = 'M0LLQxRP1NL6JChL2';

        const templateParams = {
            subject: subject,
            from_name: name,
            message: message,
            role_name: roles,
            phone_no: number,
            gmail:gmail
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => { 
                alert('Message sent successfully');
                setName("");
                setSubject("");
                setNumber("");
                setRoles("");
                setMessage("");
                setgmail("");
            })
            .catch((error) => { 
                console.error('Error sending email:', error);
            });
    };

    const rolesList = [
        'Admin',
        'Manager',
        'Developer'
    ];

    return (
        <form className="container-gmail" onSubmit={handleSubmit}>
            <div className="subject-div">
                <label className="subject">Subject</label>
                <input  
                    type="text" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                />
            </div>
            <div className="name-div">
                <label className="name">Name</label>
                <input 
                    type="text" 
                    placeholder="Enter your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="gmail-div">
                <label className="gmail">Gmail</label>
                <input type="text" value={gmail} onChange={(e)=>setgmail(e.target.value)} placeholder="Enter your Gmail" />
                </div>
            <div className="phone-div">
                <label className="phone">Phone Number:</label>
                <input 
                    type="text" 
                    placeholder="Enter your Number" 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <div className="role-div">
                <label className="role">Role:</label>
                <select 
                    value={roles} 
                    onChange={(e) => setRoles(e.target.value)}
                >
                    <option value="">Select Role</option> 
                    {rolesList.map((rolesList, index) => (
                        <option key={index} value={rolesList}>{rolesList}</option>
                    ))}
                </select>
            </div>
            <div className="message-div">
                <label className="message">Message:</label>
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                />
            </div>
            <button className="button-gmail" type="submit">Send</button> 
        </form>
    );
}

export default Gmail;
