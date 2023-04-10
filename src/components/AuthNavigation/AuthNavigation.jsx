import { StyledLink } from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};

export default AuthNavigation;
