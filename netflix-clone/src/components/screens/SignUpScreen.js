import { useRef } from "react";
import styled from "styled-components";
import { auth } from "../../firebase";

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <Container>
            <Form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input
                    ref={passwordRef}
                    placeholder="Password"
                    type="password"
                />
                <Button type="submit" onClick={signIn}>
                    Sign In
                </Button>
                <h4>
                    <span>New to Netflix?</span>
                    <Link onClick={register}>Sign Up now.</Link>
                </h4>
            </Form>
        </Container>
    );
}

export default SignUpScreen;

const Container = styled.div`
    max-width: 300px;
    padding: 70px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(0, 0, 0, 0.85);
`;

const Form = styled.form`
    display: grid;
    flex-direction: column;

    & > h1 {
        text-align: left;
        margin-bottom: 25px;
    }

    & > input {
        outline-width: 0;
        height: 40px;
        margin-bottom: 14px;
        border-radius: 5px;
        border: none;
        padding: 5px 15px;
    }

    & > h4 {
        text-align: left;
        margin-top: 30px;

        & > span {
            color: gray;
        }
    }
`;

const Link = styled.a`
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const Button = styled.button`
    padding: 16px 20px;
    font-size: 1rem;
    color: #fff;
    border-radius: 5px;
    background-color: #e50914;
    outline: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
    margin-top: 20px;
`;
