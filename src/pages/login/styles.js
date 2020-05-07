import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  width: 600px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */

  .content-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 400px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 10px;

    form {
      display: flex;
      flex-direction: column;
      padding: 20px;

      h1 {
        text-align: center;
        margin-bottom: 20px;
      }

      span {
        font-weight: 600;
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
