// system
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/auth-operations';
import { NavLink, Link } from 'react-router-dom';

// styles
import {
  Form,
  FormWrapper,
  LoginButton,
  Logo,
  Register,
  RegisterButton,
  RegisterInfoWrapper,
  RegisterInput,
  RegisterText,
  RegisterWrapper,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'nickname') {
      setNickname(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }

    if (name === 'secondPassword') {
      setSecondPassword(value);
    }
  };

  const clearForm = () => {
    setNickname('');
    setEmail('');
    setPassword('');
    setSecondPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      register({
        name: nickname,
        email,
        password,
      })
    );

    clearForm();
  };

  return (
    <>
      <Register>
        <RegisterWrapper>
          <RegisterInfoWrapper>
            <Link to="/">
              <Logo>Phonebook</Logo>
            </Link>
            <RegisterText>Create a new account to use phonebook</RegisterText>
          </RegisterInfoWrapper>

          <FormWrapper>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <RegisterInput
                type="text"
                placeholder="Nickname"
                name="nickname"
                value={nickname}
                onChange={handleInputChange}
              />

              <RegisterInput
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />

              <RegisterInput
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />

              <RegisterInput
                type="password"
                placeholder="Password again"
                name="secondPassword"
                value={secondPassword}
                onChange={handleInputChange}
              />

              <RegisterButton type="submit">Sing up</RegisterButton>

              <NavLink to="/login">
                <LoginButton type="button">Log into Account</LoginButton>
              </NavLink>
            </Form>
          </FormWrapper>
        </RegisterWrapper>
      </Register>
    </>
  );
};

export default RegisterForm;
