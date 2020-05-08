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
  width: 700px;
  height: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;

  .content-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100%;
    /* border: 1px solid red; */

    img {
      /* width: 200px; */
      height: 300px;
    }
  }

  .content-left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100%;
    /* border: 1px solid black; */
    padding: 10px;

    form {
      display: flex;
      flex-direction: column;

      span {
        color: #2264b7;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      input {
        height: 40px;
        background-color: #e6e6e6;
        border-radius: 5px;
        margin: 10px 0 10px 0;
        padding: 10px;

        ::placeholder {
          padding: 5px;
        }
      }

      button {
        height: 40px;
        background-color: #2264b7;
        border-radius: 5px;
        color: #ffffff;
        margin-top: 10px;

        :hover {
          background-color: ${darken(0.02, '#2264b2')};
        }
      }
    }
  }
`;
