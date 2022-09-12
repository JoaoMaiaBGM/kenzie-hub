import styled from "styled-components";

export const DashboardHeader = styled.header`
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 110px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 130px;
      height: 25px;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 130px;
      height: 25px;
    }
  }

  .logout {
    width: 90px;
    height: 22px;

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
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #f8f9fa;

    cursor: pointer;
    transition: 145ms;
  }

  @media screen and (min-width: 768px) {
    .logout {
      width: 100px;
      height: 30px;

      font-weight: 500;
      font-size: 18px;
      text-align: center;
      color: #f8f9fa;
    }
  }

  @media screen and (min-width: 1024px) {
    .logout {
      width: 100px;
      height: 30px;

      font-weight: 600;
      font-size: 15px;
      text-align: center;
      color: #f8f9fa;
    }
  }
`;
export const DashBoardContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;

  padding: 12px;
  gap: 10px;

  background: #121214;

  border-top: 1px solid #212529;
  border-bottom: 1px solid #212529;

  .userName {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 25px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 768px) {
    .userName {
      font-weight: 700;
      font-size: 30px;
    }
  }

  @media screen and (min-width: 1024px) {
    .userName {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 30px;
      color: #f8f9fa;
      line-height: 28px;
    }
  }

  .userModule {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #868e96;
  }

  @media screen and (min-width: 768px) {
    .userModule {
      font-weight: 500;
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    .userModule {
      font-family: sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #868e96;
    }
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 12px;

  header {
    width: 98%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 3px #ffffff;
  }

  h2 {
    font-family: sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: #f8f9fa;
  }

  svg {
    width: 30px;
    height: 30px;

    cursor: pointer;
    transition: 144ms;
  }

  .techsList-info {
    text-align: start;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #f8f9fa;
  }

  @media screen and (min-width: 768px) {
    .techsList-info {
      font-weight: 500;
      font-size: 22px;
      line-height: 28px;
    }
  }

  @media screen and (min-width: 1024px) {
    .techsList-info {
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
