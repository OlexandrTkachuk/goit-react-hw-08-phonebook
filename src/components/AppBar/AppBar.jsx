// components
import Navigation from 'components/Navigation/Navigation';
// import UserMenu from 'components/UserMenu/UserMenu';
// import AuthNavigation from 'components/AuthNavigation/AuthNavigation';

// styles
import { Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Navigation />
      {/* <AuthNavigation /> */}
    </Header>
  );
};

export default AppBar;
