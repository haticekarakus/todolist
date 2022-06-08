import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormField,
  Container,
} from "semantic-ui-react";
import "./ToDoForm.css";
const ToDoForm = (props) => {
  const [enteredWork, setEnteredWork] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [status, setStatus] = useState("Günlük");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const workChangeHandler = (event) => {
    setEnteredWork(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const toDoData = {
      work: enteredWork,
      status: status,
      date: new Date(enteredDate),
    };
    props.onSaveToDoData(toDoData);
    setEnteredDate("");
    setEnteredWork("");
    setStatus("");
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Container className="form_group">
          <div className="contact-us">
          <FormGroup>
            <FormField width={14}>
              <input
                required
                placeholder="Yapılacak görevi giriniz..."
                type="text"
                value={enteredWork}
                onChange={workChangeHandler}
              ></input>
            </FormField>
          </FormGroup>
          <FormGroup >
            <FormField  width={7}>
              <select value={status} onChange={handleChange}>
                <option value="Gümlük">Günlük</option>
                <option value="Haftalık">Haftalık</option>
                <option value="Aylık">Aylık</option>
              </select>
            </FormField>
            <FormField width={7}>
              <input
              required
                type="date"
                value={enteredDate}
                onChange={dateChangeHandler}
              ></input>
            </FormField>
          </FormGroup>
          <FormField>
              <button type="submit">
                <h3>Ekle</h3>
              </button>
            </FormField>
          </div>
        </Container>
      </Form>
    </div>
  );
};
export default ToDoForm;
