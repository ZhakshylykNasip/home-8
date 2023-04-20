import "./App.css";
import { Header } from "./components/header/Header";
import { MainContent } from "./components/main/MainContent";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [todos, setTodos] = useState([]);

  const deleteItem = (id) => {
    const deleted = todos.filter((el) => el.id !== id);
    setTodos(deleted);
  };

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="App">
      <Header
        openModal={openModal}
        todos={todos}
        setTodos={setTodos}
        setOpenModal={setOpenModal}
        openModalHandler={openModalHandler}
      />
      <MainContent
        deleteItem={deleteItem}
        openModalHandler={openModalHandler}
        todos={todos}
      />
    </div>
  );
}

export default App;
