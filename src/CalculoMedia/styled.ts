import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  height: 100vh;

  input {
    display: block;

    width: 300px;
    height: 40px;

    margin-bottom: 10px;

    border-radius: 8px;
    font-size: 18px;

    padding: 5px;
  }

  input[type=submit] {
    width: 315px;
    height: 40px;

    font-size: 18px;
    color: #fff;

    background-color: rgb(241, 34, 34);

    border-radius: 8px;
    cursor: pointer;

    margin-bottom: 20px;

    &:hover {
      background-color: rgb(201, 35, 35);
    }
  }

  .resultado {
    font-size: 22px;
    font-family: Helvetica;

    color: rgb(68, 156, 9);
  }
`;