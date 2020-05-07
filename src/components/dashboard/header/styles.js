import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 238px;
  background-color: #2264b7;
  /* border: 1px solid red; */

  header {
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    /* border: 1px solid white; */

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70px;
        height: 70px;
      }

      span {
        color: #ffffff;
        font-size: 20px;
      }
    }

    button {
      height: 30px;
      background-color: #ffffff;
      color: #2264b7;
      border-radius: 10px;
      width: 100px;
      margin-right: 40px;
      font-weight: bold !important;

      :hover {
        background-color: ${darken(0.02, '#f2f2f2f2')};
      }
    }
  }
`;
