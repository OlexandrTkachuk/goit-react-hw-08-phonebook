import { NavigationWrapper, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
      {/* {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>} */}
    </NavigationWrapper>
  );
};

export default Navigation;
