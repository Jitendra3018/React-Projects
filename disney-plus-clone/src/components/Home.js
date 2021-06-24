import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import { useDispatch } from 'react-redux'   // used to dispatch the action
import { setMovies } from '../features/movie/movieSlice'    // Used to set the movies

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log("Hello!!");
        db.collection("movies").onSnapshot((snapshot) => {      // onSnapshot returns the snap of all the things we want from the database and as soon as the database changes, the snapshot chnages as well
            let tempMovies = snapshot.docs.map((doc) => {       // .map will actually loop through each and every snapshot and will return the id and the data of the document we want
                // console.log(doc.data());                     // Each doc.data is the object which contains the information about the movies present in the database
                return { id: doc.id, ...doc.data() };           // This will return the id and the data of the movie we want to fetch and we can see this by just logging it into the console where we get the details of all the movies present in out database
            });
            // console.log(tempMovies);
            dispatch(setMovies(tempMovies));
        });
    }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height : calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`