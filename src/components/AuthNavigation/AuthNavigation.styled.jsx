import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #001a00;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: #369c5d;
  }
`;
