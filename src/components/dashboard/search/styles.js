import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 1155px;
  height: 70px;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 2px 2px 3px #888888;
  border-radius: 5px;

  form {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    span {
      font-weight: bold;
      margin-left: 20px;
    }

    input {
      height: 40px;
      background-color: #e6e6e6;
      border-radius: 5px;
      margin-left: 20px;
      padding: 10px;
    }

    .select-options {
      width: 200px;
      height: 40px;
      border-radius: 5px;
      margin-left: 20px;
      padding: 10px;
    }

    button {
      width: 150px;
      height: 40px;
      background-color: #1a1a1a;
      color: #ffffff;
      border-radius: 5px;
      margin-left: 20px;

      :hover {
        background-color: ${darken(0.02, '#333333')};
      }
    }
  }
`;
