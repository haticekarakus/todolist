import React from "react";
import ToDoForm from "./ToDoForm";
import './NewToDo.css'
const NewToDo=(props)=>{
    //girilen datayı kaydetme.
    const saveToDoHandler=(enteredToDoData)=>{
        const toDoData={
            ...enteredToDoData,
            //id'yi random atama.
            id:Math.random().toString(),
            completed:false
        };
        props.onAddToDo(toDoData);
    }
    return(
        <div>
            <ToDoForm onSaveToDoData={saveToDoHandler}></ToDoForm>
        </div>
    );
};
export default NewToDo;