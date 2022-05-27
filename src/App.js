import React, {useState, useEffect} from 'react';
import AddStudent from "./components/students/AddStudent.js"
import StudentsList from "./components/students/StudentsList.js"
import {getStudents, addStudent} from './services.js';

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

  async function addStudentHandler2(firstName, lastName, birthDate, phone, email) {
    const newStudent = {
      StudentFirstName: firstName,
      StudentLastName: lastName,
      StudentDateOfBirth: birthDate,//new Date(birthDate),
      StudentCellPhone: phone,
      StudentEmail: email
    };
    
    const response = await addStudent(newStudent);
    console.log("Add studentHandler2 method" + response);
    refreshStudents();
    // setStudentsList((prevStudentsList) => {
    //   return [...prevStudentsList, newStudent];
    // });
  }

  // async function addStudentHandler(firstName, lastName, birthDate, phone, email) {
  //    const newStudent = {
  //      StudentFirstName: firstName,
  //      StudentLastName: lastName,
  //      StudentDateOfBirth: Date(birthDate),
  //      StudentHomePhone: phone,
  //      StudentEmail: email    
  //    };

  //   // const newStudent = {
  //   //   StudentFirstName: "firstName",
  //   //   StudentLastName: "lastName",
  //   //   StudentDateOfBirth: new Date(2020, 2, 2),
  //   //   StudentCellPhone: "6162837200",
  //   //   StudentEmail: "email@gmail.com"
  //   // };
  //   console.log(newStudent)
  //   const response = await addStudent(newStudent);
  //   console.log(response);
  //   refreshStudents();
  //   // setStudentsList((prevStudentsList) => {
  //   //   return [...prevStudentsList, newStudent];
  //   // });
  // }

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
      <AddStudent onAddStudent={addStudentHandler2}></AddStudent>
      <StudentsList students={studentsList} deleteStudent={deleteStudentHandler}></StudentsList>
    </div>
  );
}

export default App;
