import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <Container className={`${show && "nav__black"}`}>
            <Contents>
                <NavLogo
                    src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                    alt="Logo"
                    onClick={() => history.push("/")}
                />
                <NavAvatar
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="User Logo"
                    onClick={() => history.push("/profile")}
                />
            </Contents>
        </Container>
    );
}

export default Nav;

const Container = styled.div`
    position: fixed;
    top: 0;
    padding: 20px;
    width: 100%;
    height: 30px;
    z-index: 100;
    /* Animations */
    transition-timing-function: ease-in;
    transition: all 0.5s;

    &.nav__black {
        background-color: #111;
    }
`;

const Contents = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NavLogo = styled.img`
    position: fixed;
    top: 10px;
    left: 0;
    width: 80px;
    object-fit: contain;
    cursor: pointer;
    padding-left: 20px;
`;

const NavAvatar = styled.img`
    position: fixed;
    right: 20px;
    width: 30px;
    cursor: pointer;
`;
