import styled from "styled-components";
import { OpenModal } from "../modal/OpenModal";
import ReactDOM from "react-dom";

export const Header = ({
  openModalHandler,
  setTodos,
  todos,
  openModal,
}) => {
  return (
    <>
      <HeaderContainer>
        <H1>Favorite Movie</H1>
        <MyButton onClick={openModalHandler}>ADD MOVIE </MyButton>
      </HeaderContainer>
      {openModal &&
        ReactDOM.createPortal(
          <OpenModal
            todos={todos}
            openModal={openModalHandler}
            setTodos={setTodos}
            openModalHandler={openModalHandler}
          />,
          document.getElementById("modal")
        )}
    </>
  );
};

const HeaderContainer = styled.header`
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MyButton = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 50px;
  border: none;
  background-color: #f92c22c2;
  border-radius: 10px;
  &:hover {
    background-color: red;
  }
  &:active {
    background-color: green;
  }
`;
const H1 = styled.h1`
  color: #fff;
`;
