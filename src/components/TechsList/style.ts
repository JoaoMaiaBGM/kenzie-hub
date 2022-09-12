import styled from "styled-components";

export const ListContainer = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #343b41;
  border-radius: 4px;

  list-style: none;
  padding: 9px;
  gap: 14px;

  li {
    width: 92%;
    height: 48px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

    background: #121214;
    border-radius: 4px;
  }

  .techTitle {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
  }

  .techStatus {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #868e96;
  }

  svg {
    cursor: pointer;
  }
`;
