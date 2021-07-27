import { useState } from "react";
import styled from "styled-components";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <Container>
            <Background>
                <Logo
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    aly="Background"
                />
                <Button onClick={() => setSignIn(true)}>Sign In</Button>
                <Gradient />
            </Background>
            <ScreenBody>
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere, Cancel at any time</h2>
                        <h3>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </h3>
                        <ScreenInput>
                            <form>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <button onClick={() => setSignIn(true)}>
                                    GET STARTED
                                </button>
                            </form>
                        </ScreenInput>
                    </>
                )}
            </ScreenBody>
        </Container>
    );
}

export default LoginScreen;

const Container = styled.div`
    position: relative;
    height: 100%;
    background: url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg")
        center no-repeat;
    background-size: cover;
`;

const Background = styled.div``;

const Logo = styled.img`
    position: fixed;
    left: 0;
    width: 150px;
    object-fit: contain;
    padding-left: 20px;
`;

const Button = styled.button`
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    border: none;
    font-weight: 600;
    cursor: pointer;
`;

const Gradient = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0.4) 60%,
        rgba(0, 0, 0, 0.8) 100%
    );
`;

const ScreenBody = styled.div`
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 1;
    color: #fff;
    padding: 20px;

    & > h1 {
        font-size: 3.125rem;
        margin-bottom: 20px;
    }

    & > h2 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 30px;
    }

    & > h3 {
        font-size: 1.3rem;
        font-weight: 400;
    }
`;

const ScreenInput = styled.div`
    margin: 30px;

    & > form {
        & > input {
            padding: 10px;
            outline: none;
            height: 30px;
            width: 30%;
            border: none;
            max-width: 600px;
        }

        & > button {
            padding: 16px 20px;
            font-size: 1rem;
            color: #fff;
            background-color: #e50914;
            outline: none;
            border: none;
            font-weight: 600;
            cursor: pointer;
        }
    }
`;
