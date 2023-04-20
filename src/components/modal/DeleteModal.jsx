import React from "react";
import styled from "styled-components";

export const DeleteModal = ({ openDeleteModal, deleteItem, id }) => {
  const deleteOneItem = (id) => {
    deleteItem(id);
    openDeleteModal();
  };

  return (
    <>
      <WrapperModal onClick={openDeleteModal}></WrapperModal>

      <Container>
        <h3>Вы точно хотите удалить ?</h3>
        <div>
          <NoButton onClick={openDeleteModal}> нет</NoButton>
          <YesButton onClick={() => deleteOneItem(id)}> да</YesButton>
        </div>
      </Container>
    </>
  );
};

const WrapperModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #000000a1;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  backdrop-filter: blur(4px);
  z-index: 999;
  border-radius: 20px;
  div{
    display: flex;
    gap: 50px;
  }
`;
const NoButton = styled.button`
  padding: 7px 15px;
  border-radius: 10px;
  border: none;
  background-color: #f14c4c;
  &:hover {
    background-color: red;

  }
`;
const YesButton = styled.button`
   padding: 7px 15px;
  border-radius: 10px;
  border: none;
  background-color: #7bf14c;
  &:hover {
    background-color: #1d8400;

  }
`
