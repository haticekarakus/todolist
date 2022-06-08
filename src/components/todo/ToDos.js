import React from "react";
import {
  Button,
  Menu,
  Icon,
  Grid,
  GridRow,
  GridColumn,
} from "semantic-ui-react";
import NewToDo from "../newTodo/NewToDo";
import ToDoList from "./ToDoList";
import "./ToDos.css";
const ToDos = (props) => {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={15}>
            {" "}
            <div className="centered">
              <ToDoList
                setToDos={props.setToDos}
                items={props.items}
              ></ToDoList>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default ToDos;
