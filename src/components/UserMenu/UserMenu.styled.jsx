import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const UserMenuText = styled.p`
  font-size: 20px;
`;

export const UserMenuButton = styled.button`
  cursor: pointer;
  padding: 6px 8px;
  transition: all 250ms ease;
  border: none;
  border-radius: 6px;

  &:hover {
    background-color: orangered;
    color: #fff;
  }
`;
