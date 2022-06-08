import React, { useState } from "react";
import Header from "./pages/Header";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, GridColumn, GridRow } from "semantic-ui-react";
import ToDos from "./components/todo/ToDos";
import TodoMenu from "./components/todo/TodoMenu";
import NewToDo from "./components/newTodo/NewToDo";

const DUMMY_TODOS = [
  {
    id: "w1",
    completed: false,
    work: "1 Saat Egzersiz Yap",
    status: "Günlük",
    date: new Date(2022, 5, 30),
  },
  {
    id: "w2",
    completed: false,
    work: "Proje Ödevi Teslimi",
    status: "Günlük",
    date: new Date(2022, 6, 16),
  },
  {
    id: "w3",
    completed: false,
    work: "Günlük Toplantı",
    status: "Haftalık",
    date: new Date(2022, 7, 30),
  },
  {
    id: "w4",
    completed: false,
    work: "Çiçekleri Sula",
    status: "Aylık",
    date: new Date(2022, 6, 23),
  },
];
const App = () => {
  const [toDos, setToDos] = useState(DUMMY_TODOS);

  //formda girilen veriyi listede en üste ekleme
  const addToDoHandler = (todo) => {
    setToDos((prevToDos) => {
      return [todo, ...prevToDos];
    });
    DUMMY_TODOS.push(todo);
  };

  const allStatus = ["Tüm", ...new Set(DUMMY_TODOS.map((item) => item.status))];
  console.log(allStatus);
  const [buttons] = useState(allStatus);

  const filter = (button) => {
    if (button === "Tüm") {
      return setToDos(DUMMY_TODOS);
    } else {
      const filteredData = DUMMY_TODOS.filter((item) => item.status === button);
      setToDos(filteredData);
    }
  };
  return (
    <div className="background">
      <Header></Header>
      <Container className="main">
        <Grid>
          <GridRow>
            <div>
              <GridColumn width={5}>
                <TodoMenu button={buttons} filter={filter}></TodoMenu>
              </GridColumn>
            </div>
            <GridColumn width={12}>
              <NewToDo onAddToDo={addToDoHandler} />
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn width={15}>
              <ToDos
                onAddToDo={addToDoHandler}
                setToDos={setToDos}
                items={toDos}
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
