import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";


const App = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async() => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/api/students");
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };
    const addStudent = async(name, course) => {
        try {
            await axios.post("http://127.0.0.1:5000/api/students", { name, course });
            fetchStudents();
        } catch (error) {
            console.error("Error adding student:", error);
        }
    };

    return ( <
        div className = "header-logo" >
        <
        p > < /p> <
        img src = "/images.jpg"
        alt = "Logo"
        className = "app-logo" / >
        <
        h1 > Samson Student Recording System < /h1> <br></br >
        <
        div className = "student-list-section" >
        <
        StudentForm addStudent = { addStudent }
        />  <
        StudentList students = { students }
        /> < /
        div > < /
        div >

    );
};

export default App;