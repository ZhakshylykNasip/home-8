import React from "react";
import styled from "styled-components";
import { DeleteModal } from "../modal/DeleteModal";
import { useState } from "react";
import  ReactDOM  from "react-dom";

export const MainContent = ({ todos ,deleteItem}) => {
  const [openDelModal, setOpenDelModal] = useState(false);

  const openDeleteModal = (id) => {
    setOpenDelModal(!openDelModal);
  };

  return (
    <>
      {todos.map((item) => (
        <MainContainer  key={item.id}>
          <div>
            <MainImg src={item.url} alt="photo" />
          </div>

          <BlockTwo className="block-two">
            <h4>{item.title}</h4>
            <Rating>{item.rating}/5 stars</Rating>

            <MyButton onClick={() => openDeleteModal(item.id)}>DELETE</MyButton>
            {openDelModal && ReactDOM.createPortal(<DeleteModal deleteItem={deleteItem} id={item.id} todos={todos} openDeleteModal={openDeleteModal} />,
              document.getElementById('modal')
              )
              
            }
          </BlockTwo>
        </MainContainer>
      ))}
    </>
  );
};

const MainContainer = styled.div`
  width: 700px;
  height: 170px;
  background-color: antiquewhite;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 9px 9px 10px 0px rgba(34, 60, 80, 0.36);
`;

const MainImg = styled.img`
  width: 250px;
  height: 170px;
  border-radius: 20px;
`;

const Rating = styled.span`
  background-color: rgb(227, 165, 31);
  color: aliceblue;
  width: 100px;
  padding: 5px 13px;
  border-radius: 10px;
  font-size: large;
`;
const BlockTwo = styled.div`
  margin-left: 20px;
  h4 {
    padding-bottom: 25px;
  }
`;

const MyButton = styled.button`
  padding: 8px 12px;
  background-color: #000305;
  border-radius: 10px;
  color: aliceblue;
  margin-left: 20px;
  font-weight: 700;
  border: none;
  &:hover{
    background-color: #0fa8ea;
  }
  &:active{
    background-color: green;
  }
`;
