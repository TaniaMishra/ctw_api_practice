import React, {useState} from 'react';
import Card from '../ui/Card.js';
import Button from '../ui/Button.js';
import ErrorModal from '../ui/ErrorModal.js';
import './AddStudent.css';

const AddStudent = props => {
    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredBirthDate, setEnteredBirthDate] = useState("");
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");

    const [error, setError] = useState();

    function addStudentHandler(event) {
        event.preventDefault();
        // if (enteredStudentname.trim().length === 0 || enteredAge.trim().length === 0) {
        //     setError({
        //         title: "Invalid input",
        //         message: "Please enter a valid name and age (non-empty values)."
        //     });
        //     return;
        // }
        // if (+enteredAge < 1) {
        //     setError({
        //         title: "Invalid age",
        //         message: "Please enter a valid age (age > 0)."
        //     });
        //     return;
        // }
        props.onAddStudent(enteredFirstName, enteredLastName, enteredBirthDate, enteredPhoneNumber, enteredEmail);
        setEnteredFirstName("");
        setEnteredLastName("");
        setEnteredBirthDate("");
        setEnteredPhoneNumber("");
        setEnteredEmail("");
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
    function errorHandler() {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onHandleError={errorHandler}></ErrorModal>}
        <Card>
            <form onSubmit={addStudentHandler}>
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
                <Button type="submit">Add Student</Button>
            </form>
        </Card>
        </div>
    );
};

export default AddStudent;