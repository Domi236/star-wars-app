import styled, { createGlobalStyle } from 'styled-components';
import { List, ListItemText } from '@material-ui/core';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    /* color: rgba(0, 0, 0, 0.87); */
    background-color: #303030;
    color: #fff;
  }

  dt {
    float: left;
    min-width: 100px;
    font-weight: bold;
  }

  #root{
    display: grid;
    grid-template-rows: 60px auto;
    grid-template-columns: auto;
    justify-items: center;
  }
`;

export const PeopleListContainer = styled(List)`

  display: flex;
  flex-direction: column;
  justify-content: stretch;

  a {
    min-width: 100%;
    width: 90vw
  }

  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    a {
      min-width: 300px;
      min-height: 350px;
      width: 300px;
      height: 350px;
      margin: 20px;
      flex-direction: column;

      div:first-child {
        font-size: 50px;
        padding: 30px;
        margin: 20px 0 50px;
      }

      div span {
        font-size: 30px;
        text-align: center;
      }

      div p {
        font-size: 18px; 
        text-align: center;
      }
    }
  }
`;

export const Button = styled(ListItemText)`

  @media (min-width: 700px) {
    text-align: center;

    span {
      font-size: 25px;
    }
  }
`;

export const SuggestionList = styled.ul`
  position: fixed;
  height: auto;
  width: 200px;
  max-width: 250px;
  top: 60px;
  left: 50%;
  list-style-type: none;
  transform: translateX(-50%);

  li {
    padding: 6px 6px 6px 10px;
    background-color: #212125;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;

    &:first-child {
      border-top-left-radius: 10px;
    }

    &:last-child {
      border-bottom-left-radius: 10px;
    }
  }

  @media (min-width: 540px) {
    transform: translateX(0);
    list-style-type: unset;
  }

  @media (min-width: 700px) {
    left: 32px;
  }
`;
