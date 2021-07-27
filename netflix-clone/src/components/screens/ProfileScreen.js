import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Nav from "../Nav";

function ProfileScreen() {
    const user = useSelector(selectUser);

    const today = new Date();

    return (
        <Container>
            <Nav />
            <ScreenBody>
                <h1>Edit Profile</h1>
                <Info>
                    <img
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                        alt="Avatar"
                    />
                    <Details>
                        <h2>{user.email}</h2>
                        <Plans>
                            <h3>Plans (Current Plan: premium)</h3>
                            <p>
                                Renewal Date:{" "}
                                {today.getDate() +
                                    "/" +
                                    (today.getMonth() + 1) +
                                    "/" +
                                    today.getFullYear()}
                            </p>
                            <Standard>
                                <p>
                                    Netflix Standard <span>1080p</span>
                                </p>
                                <button>Subscribe</button>
                            </Standard>
                            <Standard>
                                <p>
                                    Netflix Basic <span>480p</span>
                                </p>
                                <button>Subscribe</button>
                            </Standard>
                            <Standard>
                                <p>
                                    Netflix Premium <span>4k + HDR</span>
                                </p>
                                <button className="cp">Current Package</button>
                            </Standard>
                            <SignOut onClick={() => auth.signOut()}>
                                Sign Out
                            </SignOut>
                        </Plans>
                    </Details>
                </Info>
            </ScreenBody>
        </Container>
    );
}

export default ProfileScreen;

const Container = styled.div`
    height: 100vh;
    color: white;
`;

const ScreenBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 8%;
    max-width: 800px;

    & > h1 {
        font-size: 60px;
        font-weight: 400;
        border-bottom: 1px solid #282c2d;
        margin-bottom: 20px;
    }
`;

const Info = styled.div`
    display: flex;

    & > img {
        height: 100px;
    }
`;

const Details = styled.div`
    color: white;
    margin-left: 25px;
    flex: 1;

    & > h2 {
        background-color: gray;
        padding: 15px;
        font-size: 15px;
        padding-left: 20px;
    }
`;

const Plans = styled.div`
    margin-top: 20px;

    & > h3 {
        border-bottom: 1px solid #282c2d;
        padding-bottom: 10px;
    }

    & > p {
        margin-top: 10px;
    }
`;

const SignOut = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 10%;
    width: 100%;
    color: #fff;
    background-color: #e50914;
    border: none;
    outline-width: 0;
    cursor: pointer;
`;

const Standard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    opacity: 0.5;

    & > p {
        display: flex;
        flex-direction: column;
        font-size: 0.852rem;
        margin-left: 30px;
    }

    & > button {
        padding: 10px 20px;
        font-size: 1rem;
        background-color: #e50914;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
    }

    &:hover {
        opacity: 1;
    }

    & > button.cp {
        background-color: gray;
    }
`;
