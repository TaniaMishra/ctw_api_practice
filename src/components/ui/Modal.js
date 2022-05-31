import React, {useState, useEffect} from 'react';
import Card from "./Card.js";
import Button from "./Button.js";
import "./Modal.css";

const Modal = props => {
    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredBirthDate, setEnteredBirthDate] = useState("");
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");


    useEffect(() => {
        initializeForm()
    }, []);

    function initializeForm() {
        const student = props.student;
        console.log(student);
        if (student.studentFirstName != null) {
            setEnteredFirstName(student.studentFirstName);
        }
        if (student.studentLastName != null) {
            setEnteredLastName(student.studentLastName);
        }
        if (student.studentDateOfBirth != null) {
            const date =  student.studentDateOfBirth.substring(0,10);
            setEnteredBirthDate(date);
        }
        if (student.studentCellPhone != null) {
            setEnteredPhoneNumber(student.studentCellPhone);
        }
        if (student.studentEmail != null) {
            setEnteredEmail(student.studentEmail);
        }
    }
    
    function firstNameChangeHandler(event) {
        setEnteredFirstName(event.target.value);
    }
    function lastNameChangeHandler(event) {
        setEnteredLastName(event.target.value);
    }
    function birthDateChangeHandler(event) {
        setEnteredBirthDate(event.target.value);
    }
    function phoneNumberChangeHandler(event) {
        setEnteredPhoneNumber(event.target.value);
    }
    function emailChangeHandler(event) {
        setEnteredEmail(event.target.value);
    }

    function updateHandler(event) {
        event.preventDefault();
        props.onUpdateStudent(props.student.id, enteredFirstName, enteredLastName, enteredBirthDate, enteredPhoneNumber, enteredEmail);
        setEnteredFirstName("");
        setEnteredLastName("");
        setEnteredBirthDate("");
        setEnteredPhoneNumber("");
        setEnteredEmail("");
    }

    return (
        <div>
            <div className="backdrop" onClick={props.closeModal} />
            <div className="modal">
                <Card>
                    <header className="header">
                        <h2>Update Student</h2>
                    </header>
                    <div className="content">
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" value={enteredFirstName} onChange={firstNameChangeHandler}></input>
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" value={enteredLastName} onChange={lastNameChangeHandler}></input>
                        <label htmlFor="birthDate">Date of Birth</label>
                        <input id="birthDate" type="text" value={enteredBirthDate} onChange={birthDateChangeHandler}></input>
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="text" value={enteredPhoneNumber} onChange={phoneNumberChangeHandler}></input>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" value={enteredEmail} onChange={emailChangeHandler}></input>
                    </div>
                    <footer className="actions">
                        <Button clickHandler={updateHandler}>Update</Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
};

export default Modal;