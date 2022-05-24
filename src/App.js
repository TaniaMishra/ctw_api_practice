import React, {useState, useEffect} from 'react';
import AddStudent from "./components/students/AddStudent.js"
import StudentsList from "./components/students/StudentsList.js"
import {getStudents} from './services.js';

function App() {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    refreshStudents();
  }, []);

  const refreshStudents = async () => {
    const response = await getStudents();
    console.log(response);
    setStudentsList(response);
  };

  async function addStudentHandler(firstName, lastName, birthDate, phone, email) {
    const newStudent = {
      studentFirstName: firstName,
      studentLastName: lastName,
      studentDateOfBirth: birthDate,
      studentHomePhone: phone,
      studentEMail: email,
      id: Math.random().toString(),
      active: true
    };
    setStudentsList((prevStudentsList) => {
      return [...prevStudentsList, newStudent];
    });
  }

  function deleteStudentHandler(studentId) {
    const studentIndex = studentsList.findIndex(student =>
      student.id === studentId
    );
    const updatedStudents = [...studentsList];
    updatedStudents[studentIndex].active = false;
    setStudentsList(updatedStudents);
  }

  return (
    <div>
      <AddStudent onAddStudent={addStudentHandler}></AddStudent>
      <StudentsList students={studentsList} deleteStudent={deleteStudentHandler}></StudentsList>
    </div>
  );
}

export default App;
