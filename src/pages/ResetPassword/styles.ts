import styled, { keyframes } from "styled-components";
import signInBackgroundImg from "../../assets/sign-in-background.png";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 750px;
`;

const appearFromLeft = keyframes`
    from {
        opacity:0;
        transform: translateX(-50px)
    }
    to {
        opacity:1;
        transform: translateX(0)
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 25px;
    }
    > a {
      text-decoration: none;
      display: block;
      color: #f4ede8;
      margin: 24px;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      color: ${shade(0.2, "#ff9000")};
    }
    svg {
      margin-right: 15px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat, center;
  background-size: cover;
`;