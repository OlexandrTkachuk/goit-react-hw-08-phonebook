import styled from '@emotion/styled';

export const Login = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
`;

export const LoginInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Logo = styled.h2`
  font-size: 54px;
  font-weight: 800;
  color: #d8674a;
  margin-bottom: 10px;
`;

export const LoginText = styled.span`
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

export const LoginInput = styled.input`
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

export const LoginButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #369c5d;
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

export const RegisterButton = styled.button`
  align-self: center;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #d8674a;
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
