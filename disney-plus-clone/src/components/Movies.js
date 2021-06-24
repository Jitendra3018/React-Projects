import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux';

function Movies() {
    const movies = useSelector(selectMovies);
    // console.log(movies);

    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                { movies &&                 // This means that, if movies exist, then we can go ahead and can do something about it
                    movies.map((movie) => (     // Used the map function to loop through it
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt="" />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    // overflow-Y: hidden;
    padding: 20px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 4px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;      //The transition number if given more than 250ms, then it will become too slow and if given higher than that, then it will become too fast
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgba(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`