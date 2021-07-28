import axios from "../axios/axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import requests from "../requests/Requests";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // console.table(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <Container
            style={{
                backgroundImage: `url("${base_url}${movie.backdrop_path}")`,
            }}
        >
            <Contents>
                <Title>
                    {movie.title || movie.name || movie.original_name}
                </Title>
                <div>
                    <Button>Play</Button>
                    <Button>My List</Button>
                </div>
                <Description>{truncate(movie.overview, 200)}</Description>
            </Contents>
            <Fade />
        </Container>
    );
}

export default Banner;

const Container = styled.div`
    background-size: cover;
    background-position: center center;
    height: 448px;
    object-fit: contain;
    color: white;
`;

const Contents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`;

const Button = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem;
    margin-right: 1rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;

    &:hover {
        color: black;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`;

const Description = styled.div`
    width: 50rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 1.5rem;
    height: 80px;
`;

const Fade = styled.div`
    height: 7.4rem;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        #111
    );
`;
