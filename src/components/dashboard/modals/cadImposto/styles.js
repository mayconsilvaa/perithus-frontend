import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: 400px;
  box-shadow: 2px 2px 3px #888888;
  border-radius: 10px;
  background-color: #ffffff;
  /* position: absolute; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;

  .cabecalho-modal {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #1a1a1a;
      border-radius: 0 5px 0 0;

      span {
        color: #ffffff;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  .content-body {
    padding: 10px;

    span {
      font-weight: 600;
    }

    form {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 20px;

      .title {
        margin-bottom: 20px;
      }

      input {
        height: 40px;
        background-color: #e6e6e6;
        border-radius: 5px;
        padding: 10px;
        margin: 5px 0 5px 0;
      }

      button {
        height: 40px;
        background-color: #2264b7;
        color: #ffffff;
        border-radius: 5px;
        margin: 10px 0 10px 0;
      }
    }
  }
`;
