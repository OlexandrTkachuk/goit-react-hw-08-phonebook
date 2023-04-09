import { NavLink, Link } from 'react-router-dom';
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
            <Form>
              <RegisterInput type="text" placeholder="Nickname" />
              <RegisterInput type="text" placeholder="Email" />
              <RegisterInput type="text" placeholder="Password" />
              <RegisterInput type="text" placeholder="Password again" />

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
