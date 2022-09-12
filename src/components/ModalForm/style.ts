import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 98%;
  min-height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;

  z-index: 9999;
  background: #212529;
  border-radius: 10px;

  left: 5px;
  top: 150px;

  @media screen and (min-width: 768px) {
    width: 50%;
    left: 25%;
  }

  @media screen and (min-width: 1024px) {
    width: 30%;
    left: 35%;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: #343b41;
    border-radius: 4px 4px 0px 0px;
  }

  h3 {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;

    padding: 8px;
  }

  .closeModal {
    background: inherit;
    border: none;

    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 600;
    font-size: 25px;
    line-height: 26px;
    color: #868e96;

    cursor: pointer;
    transition: 144ms;
  }

  .closeModal:hover {
    color: #990e0e;
  }

  form {
    width: 80%;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: #212529;
    padding: 22px;
  }
  span {
    margin-top: -20px;

    font-family: sans-serif;
    font-size: 16px;
    line-height: 22px;
    color: darksalmon;

    text-align: start;
  }

  label {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: -25px;
    color: #f8f9fa;

    text-align: start;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;

    padding: 10px 16px;
    gap: 10px;

    background: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 4px;

    font-family: sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #f8f9fa;
  }

  select {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 10px;
    padding: 10px 16px;
    gap: 11px;

    background: #343b41;
    border-radius: 4px;

    font-family: sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #f8f9fa;
  }

  button {
    height: 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0px 22px;
    gap: 10px;

    background: #ff577f;
    border: 1px solid #ff577f;
    border-radius: 4px;

    font-family: sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;

    cursor: pointer;
  }
`;
