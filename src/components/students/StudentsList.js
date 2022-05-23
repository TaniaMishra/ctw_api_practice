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
                        <p>{student.lastName}, {student.firstName}</p>
                        <p>Date of Birth: {student.birthDate}</p>
                        <p>Email: {student.email}</p>
                        <p>Phone Number: {student.phoneNumber}</p>
                        <Button clickHandler={deleteHandler} value={student.id}>Delete</Button>
                    </li>
                )}
            </ul>
        </Card>
    );
}

export default StudentsList;