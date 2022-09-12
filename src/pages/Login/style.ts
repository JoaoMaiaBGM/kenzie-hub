import styled from "styled-components";

export const HeaderLogin = styled.header`
  margin: 20px 0 20px 0;

  img {
    width: 150px;
    height: 30px;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 150px;
    }
  }
`;

export const LoginContainer = styled.div`
  width: 300px;
  height: 400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: #212529;
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 300px;
    height: 420px;

    background: #212529;
    box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }

  h3 {
    font-family: sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #f8f9fa;
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    h3 {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #f8f9fa;
      margin: 0;
    }
  }

  form {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    form {
      height: 270px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
    }
  }

  label {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 1024px) {
    label {
      font-family: sans-serif;
      font-weight: 400;
      font-size: 20px;
      color: #f8f9fa;
    }
  }

  input {
    width: 250px;
    height: 40px;
    padding: 0px 13px;
    margin-top: -10px;

    background: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3px;

    font-family: sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 1024px) {
    input {
      width: 250px;
      height: 35px;
      padding: 0px 13px;
      margin-top: -10px;

      background: #343b41;
      border: 1px solid #f8f9fa;
      border-radius: 3px;

      font-family: sans-serif;
      font-weight: 400;
      font-size: 20px;
      color: #f8f9fa;
    }
  }

  span {
    font-family: sans-serif;
    font-size: 14px;
    color: #fe4c3fc7;

    margin-top: -5px;
  }

  @media screen and (min-width: 1024px) {
    span {
      font-family: sans-serif;
      font-size: 16px;
      color: #fe4c3fc7;

      margin-top: -7px;
    }
  }

  p {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #868e96;
  }

  @media screen and (min-width: 1024px) {
    p {
      font-family: sans-serif;
      font-weight: 600;
      font-size: 17px;
      color: #868e96;
    }
  }

  button {
    width: 277px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #ff577f;
    border: 1px solid #ff577f;
    border-radius: 4px;

    font-family: sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;

    cursor: pointer;
    transition: 145ms;
  }

  @media screen and (min-width: 1024px) {
    button {
      font-family: sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
    }
  }

  .form-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22px;
    gap: 10px;

    width: 230px;
    height: 35px;
    background: #868e96;
    border: 1px solid #868e96;
    border-radius: 4px;

    font-family: sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #f8f9fa;
    text-decoration: none;

    cursor: pointer;
    transition: 145ms;
  }

  @media screen and (min-width: 1024px) {
    .form-link {
      font-family: sans-serif;
      font-weight: 500;
      font-size: 20px;
      color: #f8f9fa;
      text-decoration: none;
    }
  }
`;
