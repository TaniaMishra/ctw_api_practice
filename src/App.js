import React, {useState} from 'react';
import AddStudent from "./components/students/AddStudent.js"
import StudentsList from "./components/students/StudentsList.js"

function App() {
  const [studentsList, setStudentsList] = useState([]);

    function addStudentHandler(firstName, lastName, birthDate, phone, email) {
    const newStudent = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      phoneNumber: phone,
      email: email,
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
