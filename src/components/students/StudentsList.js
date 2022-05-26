import React from 'react';
import Card from '../ui/Card.js'
import Button from '../ui/Button.js'
import './StudentsList.css'

const StudentsList = props => {
    
    let activeStudents = props.students.filter(student =>
        student.active === true
    );

    function deleteHandler(event) {
        props.deleteStudent(event.target.value);
    }

    return (
        <Card>
            <ul className="students">
                {activeStudents.map(student =>
                    <li key={student.id}>
                        <p>{student.id}</p>
                        <p>{student.studentLastName}, {student.studentFirstName}</p>
                        <p>Date of Birth: {student.studentDateofBirth}</p>
                        <p>Email: {student.studentEmail}</p>
                        <p>Phone Number: {student.studentHomePhone}</p>
                        <Button clickHandler={deleteHandler} value={student.id}>Delete</Button>
                    </li>
                )}
            </ul>
        </Card>
    );
}

export default StudentsList;