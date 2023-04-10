// system
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

// styles
import { NavigationWrapper, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>

      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavigationWrapper>
  );
};

export default Navigation;
