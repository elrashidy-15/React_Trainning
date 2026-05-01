import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";
export default function Form() {
  const [errorMassage, setErrorMassage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    phoneNumber: "",
    Age: "",
    isEmployee: false,
    salary: "",
  });
  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMassage(null);
    const { Age, phoneNumber } = formInput;
    if (Age < 18 || Age > 100) {
      setErrorMassage("The Age Is Not Allowed");
    }else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMassage("The Phone Number Is Not Valid");}
    setShowModal(true);
  }
  function handleDiv() {
    if (showModal == true) {
      setShowModal(false);
    }
  }
  const btnDisable =
    formInput.name == "" || formInput.Age == "" || formInput.phoneNumber == "";
  return (
    <div
      onClick={handleDiv}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form className="flex" id="form" style={{ flexDirection: "column" }}>
        <h1>Requesting A Loan</h1>
        <hr></hr>
        <label>Name:</label>
        <input
          value={formInput.name}
          onChange={(e) => {
            setFormInput({ ...formInput, name: e.target.value });
          }}
        />
        <label>Age:</label>
        <input
          value={formInput.Age}
          onChange={(e) => {
            setFormInput({ ...formInput, Age: e.target.value });
          }}
        />
        <label>Phone:</label>
        <input
          value={formInput.phoneNumber}
          onChange={(e) => {
            setFormInput({ ...formInput, phoneNumber: e.target.value });
          }}
        />
        <label style={{ marginTop: "30px" }}>Are you employed?</label>
        <input
          type="checkbox"
          checked={formInput.isEmployee}
          onChange={(e) => {
            setFormInput({ ...formInput, isEmployee: e.target.checked });
          }}
        />
        <label>Salary:</label>
        <select
          value={formInput.salary}
          onChange={(e) => {
            setFormInput({ ...formInput, salary: e.target.value });
          }}
        >
          <option>less than $500</option>
          <option>between $500 and $1000</option>
          <option>higher than $1000</option>
        </select>
        <button
          className={btnDisable ? "disable" : ""}
          onClick={handleFormSubmit}
          disabled={btnDisable}
          id="submit-btn"
        >
          Submit
        </button>
      </form>
      <Modal errorMassage={errorMassage} isVisible={showModal} />
    </div>
  );
}
