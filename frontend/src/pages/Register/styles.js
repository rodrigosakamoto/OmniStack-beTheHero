import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  div.content {
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow:  0 0 100px rgba(0,0,0,0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
`;

export const RegisterForm = styled(Form)`
  width: 100%;
  max-width: 450px;

  span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 10px;
      font-weight: bold;
    }

  input {
    margin-top: 8px;
  }

  div {
    display: flex;
     
    input + input {
      margin-left: 8px;
    }

  }
`;