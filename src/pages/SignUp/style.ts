import styled from "styled-components";

export const HeaderSignUp = styled.header`
  width: 300px;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 130px;
    height: 25px;
  }

  .btnVoltar {
    width: 100px;
    height: 25px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 7px;
    gap: 9px;

    background: #212529;
    border-radius: 4px;

    text-decoration: none;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #f8f9fa;
    cursor: pointer;
    transition: 145ms;
  }
`;

export const SignContainer = styled.div`
  height: 600px;
  display: flex;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;

  background: #212529;
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  @media screen and (min-width: 1024px) {
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 300px;

    background: #212529;
    box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }

  h3 {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #f8f9fa;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #f8f9fa;
      margin: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    h3 {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 22px;
      color: #f8f9fa;
      margin: 0;
    }
  }

  p {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #868e96;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    p {
      font-family: sans-serif;
      font-weight: 600;
      font-size: 16px;
      color: #868e96;
      margin: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      font-family: sans-serif;
      font-weight: 600;
      font-size: 16px;
      color: #868e96;
      margin: 0;
    }
  }

  form {
    height: 530px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    form {
      height: 540px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 1024px) {
    form {
      height: 550px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
    }
  }

  label {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 768px) {
    label {
      font-family: sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #f8f9fa;
    }
  }

  @media screen and (min-width: 1024px) {
    label {
      font-family: sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #f8f9fa;
    }
  }

  input {
    width: 250px;
    height: 32px;

    padding: 0px 13px;
    background: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3px;

    font-family: sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 768px) {
    input {
      width: 250px;
      height: 28px;

      padding: 0px 13px;
      background: #343b41;
      border: 1px solid #f8f9fa;
      border-radius: 3px;

      font-family: sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #f8f9fa;
    }
  }

  @media screen and (min-width: 1024px) {
    input {
      width: 250px;
      height: 30px;

      padding: 0px 13px;
      background: #343b41;
      border: 1px solid #f8f9fa;
      border-radius: 3px;

      font-family: sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #f8f9fa;
    }
  }

  select {
    width: 278px;
    height: 28px;
    padding: 0px 13px;

    background: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3px;

    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #f8f9fa;

    cursor: pointer;
  }

  span {
    font-family: sans-serif;
    font-size: 13px;
    color: #fe4c3fc7;
    text-align: start;
  }

  @media screen and (min-width: 1024px) {
    span {
      font-family: sans-serif;
      font-size: 14px;
      color: #fe4c3fc7;
      text-align: start;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 277px;
    height: 28px;
    background: #ff577f;
    border: 1px solid #ff577f;
    border-radius: 4px;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    transition: 145ms;
  }
`;
