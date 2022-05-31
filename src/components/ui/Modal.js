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
        if (props.student.firstName != null) {
            setEnteredFirstName(student.studentFirstName);
        }
        if (props.student.firstName != null) {
            setEnteredLastName(student.studentLastName);
        }
        if (props.student.firstName != null) {
            setEnteredPhoneNumber(student.studentCellPhone);
        }
        if (props.student.firstName != null) {
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

    return (
        <div>
            <div className="backdrop" onClick={props.closeModal} />
            <div className="modal">
                <Card>
                    <header className="header">
                        <h2>Update Student</h2>
                    </header>
                    <div className="content">
                        <input type="text" value={enteredFirstName} onChange={firstNameChangeHandler}></input>
                        <input type="text" value={enteredLastName} onChange={lastNameChangeHandler}></input>
                        <input type="text" value={enteredPhoneNumber} onChange={phoneNumberChangeHandler}></input>
                        <input type="text" value={enteredEmail} onChange={emailChangeHandler}></input>

                    </div>
                    <footer className="actions">
                        <Button clickHandler={props.closeModal}>Update</Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
};

export default Modal;