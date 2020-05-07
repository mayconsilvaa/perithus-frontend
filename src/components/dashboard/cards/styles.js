import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 250px;
  height: 150px;
  background-color: #ffffff;
  box-shadow: 2px 2px 3px #888888;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h1 {
    margin-top: 20px;
  }

  .description {
    margin: 10px 0 10px 0;
    color: #666666;
  }

  .value {
    font-size: 20px;
  }
`;
