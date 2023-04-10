// system
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUser } from 'redux/auth/auth-selectors';

// styles
import {
  UserMenuButton,
  UserMenuText,
  UserMenuWrapper,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <UserMenuWrapper>
      <UserMenuText>Welcome, {user.email}</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
