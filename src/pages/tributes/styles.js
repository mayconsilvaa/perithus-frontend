import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #2264b7;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 5px;

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
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  .btn-add {
    width: 100%;
    height: 40px;
    background-color: #2264b7;
    color: #ffffff;
    border-radius: 5px;
    margin: 10px 5px 10px 0;
  }

  .btn-previous {
    width: 100%;
    height: 40px;
    background-color: #000000;

    border-radius: 5px;
    margin: 10px 0 10px 5px;

    a {
      color: #ffffff;
    }
  }
`;
