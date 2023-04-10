import { useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="UserMenuWrapper">
      <p className="UserNameStyled">Welcome, Aki Temmui</p>
      <button type="button" onClick={() => dispatch('logout')}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
