import styled from '@emotion/styled';

export const FilterInput = styled.input`
  border: 1px solid transparent;
  outline: none;
`;

export const FilterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 20px 0px 0px 95px;
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
