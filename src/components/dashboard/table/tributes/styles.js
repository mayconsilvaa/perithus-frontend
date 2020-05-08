import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;

  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 5px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      &.title {
        color: #363f5f;
      }
      &.income {
        color: #12a454;
      }
      &.outcome {
        color: #e83f5b;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  .btn-edit {
    border-radius: 5px;
    width: 120px;
    height: 30px;
    background-color: #2264b7;

    a {
      color: #fff;
      padding: 5px 27px;
      /* border: 1px solid red; */
    }
  }

  .btn-delete {
    border-radius: 5px;
    width: 120px;
    height: 30px;
    background-color: #cb0000;
    color: #fff;
  }

  .btn-quitar {
    width: 100%;
    height: 30px;
    background-color: green;
    color: #ffffff;
    border-radius: 5px;
    margin: 10px 5px 10px 0;
  }
`;
