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
  transform: rotate(-90deg);
  a {
    padding: 20px;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  a:hover {
    color: pink;
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
    padding: 10px;
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
`;

S.Introduction = styled.section`
  ${containerElement};
  p {
    ${text}
  }
  .contactInfo {
    font-size: 1.2em;
    color: #264d73;
    font-weight: bold;
  }
  .email {
    text-decoration: none;
    color: #264d73;
  }
  .phoneNumber {
    letter-spacing: 1px;
  }
`;

S.ProfilePhoto = styled.section`
  ${containerElement};
  img {
    width: 100%;
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
