import React from "react";
import { Icon } from "semantic-ui-react";
import ToDo from "./ToDo";
import "./ToDoList.css";
const ToDoList = (props) => {
  return (
    <div className="list">
      <h1 className="title">
        Yapılacaklar Listesi <Icon name="tasks"></Icon>
      </h1>
      <ul>
        {props.items.map((todo) => (
          <ToDo
            setToDos={props.setToDos}
            items={props.items}
            key={todo.id}
            work={todo.work}
            completed={todo.comleted}
            date={todo.date}
            todo={todo}
            status={todo.status}
          />
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
