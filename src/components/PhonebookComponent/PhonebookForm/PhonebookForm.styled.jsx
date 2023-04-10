import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 20px;
  justify-content: space-between;
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  text-align: center;
  margin: 0 auto;
  outline: none;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: orangered;
  color: #fff;
  opacity: 0.8;

  transition: all 250ms ease;

  :hover {
    opacity: 1;
  }
`;

export const FormWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  border: 1px solid transparent;
  outline: none;
`;
