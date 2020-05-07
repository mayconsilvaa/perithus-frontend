import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: -100px;
  /* border: 1px solid red; */
`;

export const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const ContentSearch = styled.div`
  display: flex;
  width: 100%;
  max-width: 1155px;
  /* border: 1px solid blue; */
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0 20px 0;
  /* border: 1px solid black; */

  div {
    display: flex;
    width: 100%;
    max-width: 1100px;
    justify-content: flex-end;
    /* border: 1px solid red; */

    button {
      height: 40px;
      background-color: #2264b7;
      border-radius: 5px;
      color: #ffffff;
      padding: 10px;
      font-weight: 600 !important;
    }
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* margin-top: -350px; */
  /* border: 1px solid red; */
`;

export const ContainerTable = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* margin-top: 350px; */
  margin-bottom: 30px;
  /* border: 1px solid black; */
`;

export const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
`;
