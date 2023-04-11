// system
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/auth-operations';
import { NavLink, Link } from 'react-router-dom';

// styles
import {
  Form,
  FormWrapper,
  Login,
  LoginButton,
  LoginInfoWrapper,
  LoginInput,
  LoginText,
  LoginWrapper,
  Logo,
  RegisterButton,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logIn({ email, password }));

    clearForm();
  };

  return (
    <>
      <Login>
        <LoginWrapper>
          <LoginInfoWrapper>
            <Link to="/">
              <Logo>Phonebook</Logo>
            </Link>
            <LoginText>Please, Log In to use phonebook</LoginText>
          </LoginInfoWrapper>

          <FormWrapper>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <LoginInput
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <LoginInput
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />

              <LoginButton type="submit">Log in</LoginButton>

              <NavLink to="/register">
                <RegisterButton type="button">
                  Create a new account
                </RegisterButton>
              </NavLink>
            </Form>
          </FormWrapper>
        </LoginWrapper>
      </Login>
    </>
  );
};

export default LoginForm;
