import styled from '@emotion/styled';

export const Register = styled.div`
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

export const RegisterWrapper = styled.div`
  // width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
`;

export const RegisterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Logo = styled.h2`
  font-size: 60px;
  font-weight: 800;
  color: #1775ee;
  margin-bottom: 10px;
`;

export const RegisterText = styled.span`
  font-size: 24px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  gap: 24px;
  width: 400px;
`;

export const RegisterInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 18px;
  padding-left: 20px;
  margin: 0 auto;
  width: 320px;

  &:focus {
    outline: none;
  }
`;

export const RegisterButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #1775ee;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 30px;
  transition: all 250ms ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const LoginButton = styled.button`
  align-self: center;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #42b72a;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 40px;
  transition: all 250ms ease;

  &:hover {
    opacity: 0.85;
  }
`;
