import React from "react";
import {
  Card,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Button,
} from "semantic-ui-react";
import "./Todo.css";
const ToDo = (props) => {
  const deleteHandler = () => {
    console.log(props);
    props.setToDos(props.items.filter((el) => el.id !== props.todo.id));
  };
  const completeHandler = () => {
    props.setToDos(
      props.items.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
    console.log(props.todo);
  };
  
  return (
    <div>
      <Card.Group>
        <Card fluid color="black">
          <Grid>
            <GridRow >
              <GridColumn width="10">
                <h3
                  className={`title ${props.todo.completed ? "completed" : ""}`}
                >
                  {props.work}
                </h3>
              </GridColumn>
              <GridColumn width="6">
                <div className="icon">
                  <Button.Group>
                    <Button onClick={deleteHandler} attached  color="facebook">
                      <Icon className="icon-1" name="delete" color="white" />
                    </Button>
                    <Button.Or />
                    <Button onClick={completeHandler} attached color="facebook">
                      <Icon
                        className="icon-1"
                        name="check circle"
                        color="white"
                      />
                    </Button>
                  </Button.Group>
                </div>
              </GridColumn>
            </GridRow>
          </Grid>
        </Card>
      </Card.Group>
    </div>
  );
};
export default ToDo;
