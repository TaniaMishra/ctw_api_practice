import React from 'react';
import Card from '../ui/Card.js'
import Button from '../ui/Button.js'
import './StudentsList.css'

const StudentsList = props => {
    
    let activeStudents = props.students.filter(student =>
        student.active === true
    );

    

    function archiveStudentHandler(event) {
        props.archiveStudent(event.target.value);
    }

    function updateStudentModal(event) {
        props.updateStudent(event.target.value);
    }

    return (
        <Card>
            <ul className="students">
                {activeStudents.map(student =>
                    <li key={student.id}>
                        <p>{student.id}</p>
                        <p>{student.studentLastName}, {student.studentFirstName}</p>
                        <p>Date of Birth: {student.studentDateOfBirth.substring(0,10)}</p>
                        <p>Email: {student.studentEmail}</p>
                        <p>Phone Number: {student.studentCellPhone}</p>
                        <Button clickHandler={archiveStudentHandler} value={student.id}>Delete</Button>
                        <Button clickHandler={updateStudentModal} value={student.id}>Update</Button>
                    </li>
                )}
            </ul>
        </Card>
    );
}

export default StudentsList;