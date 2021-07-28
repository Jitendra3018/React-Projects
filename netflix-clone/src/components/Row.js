import axios from "../axios/axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <Container>
            <h2>{title}</h2>
            <Posters>
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <Poster
                                className={isLargeRow && "poster__large"}
                                key={movie.id}
                                src={`${base_url}${
                                    isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                alt={movie.name}
                            />
                        )
                )}
            </Posters>
        </Container>
    );
}

export default Row;

const Container = styled.div`
    color: white;
    margin-left: 20px;
`;

const Posters = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Poster = styled.img`
    max-height: 150px;
    object-fit: contain;
    width: 100%;
    transition: transform 450ms;
    padding: 10px;

    &:hover {
        transform: scale(1.08);
        opacity: 1;
    }

    &.poster__large {
        margin-top: 10px;
        max-height: 250px;

        &:hover {
            transform: scale(1.09);
        }
    }
`;
