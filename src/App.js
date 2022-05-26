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

  async function addStudentHandler(firstName, lastName, birthDate, phone, email) {
    // const newStudent = {
    //   studentFirstName: firstName,
    //   studentLastName: lastName,
    //   studentDateOfBirth: Date(2020, 2, 2),
    //   studentHomePhone: phone,
    //   studentEmail: email,
    //   active: true
    // };

    const newStudent = {
      StudentFirstName: "firstName",
      StudentLastName: "lastName",
      StudentDateOfBirth: new Date(2020, 2, 2),
      StudentCellPhone: "6162837200",
      StudentEmail: "email@gmail.com"
    };
    console.log(newStudent)
    const response = await addStudent(newStudent);
    console.log(response);
    refreshStudents();
    // setStudentsList((prevStudentsList) => {
    //   return [...prevStudentsList, newStudent];
    // });
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
