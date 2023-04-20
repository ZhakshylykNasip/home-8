import React, { useRef } from "react";
import styled from "styled-components";

export const OpenModal = ({ todos, openModalHandler, setTodos }) => {
  const titleValue = useRef();
  const urlValue = useRef();
  const ratingValue = useRef();

  const submitHandelr = (event) => {
    event.preventDefault();

    const data = {
      id: Date.now().toString(),
      title: titleValue.current.value,
      url: urlValue.current.value,
      rating: ratingValue.current.value,
    };

    setTodos([...todos, data]);

    titleValue.current.value = "";
    urlValue.current.value = "";
    ratingValue.current.value = "";
    openModalHandler();
  };

  return (
    <>
      <WrapperModal onClick={openModalHandler}></WrapperModal>
      <Container>
        <MyLabel>
          Movie title:
          <MyInput type="text" ref={titleValue} />
        </MyLabel>
        <MyLabel>
          Movie img:
          <MyInput type="url" ref={urlValue} />
        </MyLabel>
        <MyLabel>
          Movie rating:
          <MyInput type="number" ref={ratingValue} />
        </MyLabel>
        <div>
          <MyButton onClick={openModalHandler}>Cancel</MyButton>
          <MyButtonAdd onClick={submitHandelr}>ADD</MyButtonAdd>
        </div>
      </Container>
    </>
  );
};

const MyLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  gap: 10px;
`;

const MyInput = styled.input`
  width: 300px;
  height: 20px;
  border-radius: 10px;
  &:hover {
    background-color: #e4ba6097;
  }
`;

const MyButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #e84848;
  border-radius: 20px;
  border: none;
  &:hover {
    background-color: #ff0000;
  }
`;
const MyButtonAdd = styled.button`
  width: 100px;
  height: 30px;
  background-color: #39df39;
  border-radius: 20px;
  border: none;
  &:hover {
    background-color: green;
  }
`;

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
  z-index: 999;
  div {
    display: flex;
    margin-top: 40px;
    gap: 50px;
  }
`;
