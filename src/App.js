import React, {useState, useEffect} from 'react';
import AddStudent from "./components/students/AddStudent.js"
import StudentsList from "./components/students/StudentsList.js"
import Modal from "./components/ui/Modal.js";
import {getStudents, addStudent, updateStudent} from './services.js';

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateStudent, setUpdateStudent] = useState();

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
      StudentFirstName: firstName,
      StudentLastName: lastName,
      StudentDateOfBirth: birthDate,
      StudentCellPhone: phone,
      StudentEmail: email
    };
    
    await addStudent(newStudent);
   
    refreshStudents();
  
  }

  async function updateStudentHandler(id, firstName, lastName, birthDate, phone, email) {
    const updatedStudent = {
      id: id,
      StudentFirstName: firstName,
      StudentLastName: lastName,
      StudentDateOfBirth: birthDate,
      StudentCellPhone: phone,
      StudentEmail: email
    };
    console.log(updatedStudent);
    await updateStudent(updatedStudent);
   
    refreshStudents();
    closeUpdateModal();
  
  }
  
  function archiveStudentHandler(studentId) {
  //   const studentIndex = studentsList.findIndex(student =>
  //     student.id === studentId
  //   );
  //   const updatedStudents = [...studentsList];
  //   updatedStudents[studentIndex].active = false;
  //   setStudentsList(updatedStudents);
  }

  function closeUpdateModal() {
    setUpdateModal(false);
  }

  function openUpdateModal(studentId) {
    const studentIndex = studentsList.findIndex(student =>
      student.id === studentId
    );
    setUpdateStudent(studentsList[studentIndex]);
    setUpdateModal(true);
  }

  return (
    <div>
      {updateModal && <Modal closeModal={closeUpdateModal} student={updateStudent} onUpdateStudent={updateStudentHandler}></Modal>}
      <AddStudent onAddStudent={addStudentHandler}></AddStudent>
      <StudentsList students={studentsList} archiveStudent={archiveStudentHandler} updateStudent={openUpdateModal}></StudentsList>
    </div>
  );
}

export default App;


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
