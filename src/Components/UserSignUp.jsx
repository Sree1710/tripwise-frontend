import React, { useState } from "react";
import styled from "styled-components";

// Use your own Unsplash/travel background image if needed
const bgImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  background: url(${bgImage}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Overlay = styled.div`
  background: rgba(24, 24, 24, 0.45);
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 1;
`;

const LeftContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 48px;
  margin-top: auto;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 18px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 50px;
    max-width: 300px;
  }

  .bottom-links {
    margin-top: 24px;
    font-size: 0.95rem;

    a {
      color: #fff;
      margin-right: 15px;
      text-decoration: underline;
      font-weight: 500;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBox = styled.div`
  width: 100%;
  max-width: 376px;
  padding: 32px 0;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.04rem;
  margin-bottom: 22px;
  color: #494949;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  background: #387cf8;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 13px 0;
  border: none;
  border-radius: 8px;
  margin-bottom: 22px;
  cursor: pointer;
  transition: background 0.18s;

  &:hover {
    background: #295db6;
  }
`;

const SignInText = styled.div`
  text-align: center;
  margin-bottom: 16px;
  color: #494949;
  font-size: 1rem;

  a {
    color: #387cf8;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 0.97rem;
  margin-bottom: 10px;

  &:before,
  &:after {
    content: "";
    height: 1px;
    flex: 1;
    background: #ececec;
    margin: 0 10px;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-top: 12px;

  button {
    background: #f3f3f3;
    border: 1px solid #e6e6e6;
    border-radius: 7px;
    padding: 9px 15px;
    cursor: pointer;
    font-size: 1.13rem;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: background 0.13s;

    &:hover {
      background: #ededed;
    }

    img {
      width: 18px;
      height: 18px;
      display: inline;
    }
  }
`;

// Password toggle icon container (styled span)
const ShowPasswordIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 14px;
  cursor: pointer;
  font-size: 1.2em;
  color: #767676;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

// Main Component
const RegisterPage = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        location: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your submission logic here
        alert("Submitted: " + JSON.stringify(form, null, 2));
    };

    return (
        <Container>
            <Left>
                <Overlay />
                <LeftContent>
                    <h1>YOUR<br />NEXT ADVENTURE AWAITS!</h1>
                    <p>
                        Create an account to unlock exclusive deals, plan your dream escapes, and pick up where you left off. Whether it's mountains, beaches, or city lights
                    </p>
                </LeftContent>
            </Left>
            <Right>
                <FormBox>
                    <Title>Register Now!</Title>
                    <Subtitle>Register now to start your journey!</Subtitle>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="date"
                                name="dob"
                                placeholder="Date of Birth"
                                value={form.dob}
                                onChange={handleChange}
                                required
                                max={new Date().toISOString().split("T")[0]}
                            />
                            <Input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={form.location}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <div style={{ position: "relative" }}>
                            <Input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                style={{ marginBottom: "6px" }}
                            />
                            <ShowPasswordIcon
                                onClick={togglePassword}
                                title={showPassword ? "Hide Password" : "Show Password"}
                                aria-label={showPassword ? "Hide Password" : "Show Password"}
                            >
                                {showPassword ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                                            stroke="#000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                                            stroke="#000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="3"
                                            stroke="#000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M2 2L22 22"
                                            stroke="#000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                                            stroke="#000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                                            stroke="#000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </ShowPasswordIcon>
                        </div>
                        <Button type="submit">Sign Up</Button>
                    </form>
                    <SignInText>
                        Already have an account? <a href="/userlogin">Sign In</a>
                    </SignInText>
                    <SignInText>
                        Want to go back? <a href="/">Go To Homepage</a>
                    </SignInText>
                    <Divider>or continue with</Divider>
                    <SocialButtons>
                        <button>
                            <img
                                src="https://img.icons8.com/color/48/000000/google-logo.png"
                                alt="Google"
                            />{" "}
                            Google
                        </button>
                    </SocialButtons>
                </FormBox>
            </Right>
        </Container>
    );
};

export default RegisterPage;
