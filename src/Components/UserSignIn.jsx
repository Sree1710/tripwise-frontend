import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #162029;
  font-family: 'Montserrat', Arial, sans-serif;
`;

const LeftSide = styled.div`
  flex: 1.2;
  background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px 40px 80px 40px;
  border-radius: 20px 0 0 20px;
  position: relative;
  overflow: hidden;  /* Ensures overlay stays contained */

  &::before {
    position: absolute;
    top: 24px;
    left: 32px;
    font-weight: 700;
    font-size: 18px;
    color: #fff;
    opacity: 0.9;
    letter-spacing: 1px;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(24, 78, 137, 0.3); /* semi-transparent blue */
    z-index: 1;
  }

  /* Make sure content appears above the overlay */
  > * {
    position: relative;
    z-index: 3;
  }
`;


const HeroText = styled.div`
  max-width: 440px;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  margin: 0;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.1;
`;

const HeroDescription = styled.p`
  color: #eaeaea;
  font-size: 14px;
  margin: 18px 0 0 0;
  line-height: 1.5;
`;

const RightSide = styled.div`
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 20px 20px 0;
  min-width: 440px;
`;

const LoginContainer = styled.div`
  width: 80%;
  max-width: 390px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 10px;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  color: #484848;
  font-size: 14px;
  margin: 0 0 30px;
`;

const Label = styled.label`
  display: block;
  margin-top: 12px;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cfd8dc;
  border-radius: 8px;
  font-size: 15px;
  background: #fafafa;
  margin-bottom: 10px;
`;

const PasswordFieldContainer = styled.div`
  position: relative;
`;

const ShowPasswordIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 8px;

  label {
    margin: 0;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    margin-right: 6px;
  }

  a {
    color: #0c3e53;
    text-decoration: none;
    font-weight: 600;
  }
`;

const SignInButton = styled.button`
  width: 100%;
  background: #387cf8;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  border: none;
  border-radius: 7px;
  margin-top: 12px;
  cursor: pointer;
  transition: background 0.18s;

  &:hover {
    background: #176172;
  }
`;

const SignupText = styled.div`
  text-align: center;
  margin-top: 28px;
  font-size: 15px;
  color: #535353;

  a {
    color: #387cf8;
    text-decoration: none;
    margin-left: 5px;
    font-weight: 700;
  }
`;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <LeftSide>
        <HeroText>
          <HeroTitle>
            YOUR<br />NEXT ADVENTURE AWAITS!
          </HeroTitle>
          <HeroDescription>
            Log in to unlock exclusive deals, plan your dream escapes, and pick up where you left off. Whether it's mountains, beaches, or city lights
          </HeroDescription>
          <HeroDescription style={{ marginTop: '16px' }}>
            Your journey starts here.
          </HeroDescription>
        </HeroText>
      </LeftSide>
      <RightSide>
        <LoginContainer>
          <Title>WELCOME BACK !</Title>
          <Subtitle>Welcome back! Please enter your details.</Subtitle>
          <form>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="username" />
            <Label htmlFor="password">Password</Label>
            <PasswordFieldContainer>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                style={{ paddingRight: '40px' }}
              />
              <ShowPasswordIcon
                onClick={() => setShowPassword((prev) => !prev)}
                title={showPassword ? "Hide Password" : "Show Password"}
              >
                {showPassword ? (
                  // Show Eye SVG
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  // Hide Eye SVG
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 2L22 22" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </ShowPasswordIcon>
            </PasswordFieldContainer>
            <Options>
              <label>

              </label>
              <a href="#">Forgot password ?</a>
            </Options>
            <SignInButton type="submit">Sign in</SignInButton>
            <SignupText>
              Don't have an account?
              <a href="/usersignup">Sign up</a>
            </SignupText>
            <SignupText>
              Want to go back?
              <a href="/">Go To Homepage</a>
            </SignupText>
          </form>
        </LoginContainer>
      </RightSide>
    </Container>
  );
};

export default LoginPage;
