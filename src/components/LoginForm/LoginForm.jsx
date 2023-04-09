import { NavLink, Link } from 'react-router-dom';
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
  return (
    <>
      <Login>
        <LoginWrapper>
          <LoginInfoWrapper>
            <Link to="/">
              <Logo>Phonebook</Logo>
            </Link>
            <LoginText>Please, Log In to use phonebook.</LoginText>
          </LoginInfoWrapper>

          <FormWrapper>
            <Form>
              <LoginInput
                type="text"
                className="loginInput"
                placeholder="Email"
              />
              <LoginInput
                type="text"
                className="loginInput"
                placeholder="Password"
              />

              <LoginButton type="submit">Log in</LoginButton>

              <NavLink to="/register">
                <RegisterButton type="button" className="loginButton">
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
