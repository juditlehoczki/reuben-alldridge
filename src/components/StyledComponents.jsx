import styled, { css } from "styled-components";

import backgroundImage from "../img/background.jpg";

const S = {};

S.Navbar = styled.nav`
  position: fixed;
  right: -100px;
  top: 120px;
  font-family: "Comfortaa", cursive;
  background-color: black;
  padding: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: -5px -5px 8px #888888;
  transform: rotate(-90deg);
  a {
    padding: 20px;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  a:hover {
    color: lightblue;
  }
  @media (max-width: 768px) {
    transform: rotate(0deg);
    right: 0px;
    top: 0px;
    height: 20px;
    width: 100%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    padding: 20px 0px;
  }
`;

S.JL = styled.div`
  position: fixed;
  right: 0px;
  bottom: 10px;
  font-family: "Courgette", cursive;
  font-size: 0.8em;
  background-color: pink;
  opacity: 50%;
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: -3px -3px 5px #888888;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  a:hover {
    color: #ff007f;
  }
  @media (max-width: 768px) {
    font-size: 0.4em;
    padding: 5px;
  }
`;

S.Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const containerElement = css`
  width: 50%;
  height: 100vh;
  background-color: white;
  box-sizing: border-box;
  padding: 100px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: auto;
  }
  h1 {
    font-family: "Pacifico", cursive;
    font-size: 2.5em;
    margin: 0;
  }
`;

const text = css`
  font-family: "Merriweather", serif;
  text-align: justify;
  line-height: 2;
  @media (max-width: 768px) {
    line-height: 1.5;
  }
`;

S.TromboneImage = styled.section`
  ${containerElement};
  background-image: url(${backgroundImage});
  background-size: cover;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

S.Introduction = styled.section`
  ${containerElement};
  p {
    ${text}
  }

  .contactInfo {
    color: #264d73;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 0.8em;
      margin: 10px auto;
    }
  }
  .contactDetail {
    color: #264d73;
    text-decoration: none;
    @media (max-width: 768px) {
      border: 1px black solid;
      border-radius: 5px;
      padding: 8px;
      margin: 5px;
      background-color: black;
      color: white;
      width: 90%;
    }
  }
  .phoneNumber {
    letter-spacing: 1px;
  }
`;

S.ProfilePhoto = styled.section`
  ${containerElement};
  img {
    width: 90%;
    border: 1px #ddd solid;
    border-radius: 10px;
    padding 5px;
  }
  margin: 0px auto;
`;

S.About = styled.section`
  ${containerElement};
  p {
    ${text}
  }
`;

export default S;
