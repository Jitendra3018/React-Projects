import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Detail() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState();     // This is basically a redux, but for the individual components
    // console.log(id);

    useEffect(() => {
        // Here we need to grab the movie inform from the database
        db.collection("movies")        //This is directly coming from the database directory
        .doc(id)
        .get()          // We will get the id and then we will grab it and will use it
        .then((doc) => {
            if(doc.exists) {        // If the document exists in the databse
                // then just save the movie data in the state component because the data will change with the change in the id so we cannot save it in the redux
                setMovie(doc.data());
            } else {    // If the movie doesnot exist in the database, 
                // then, we will redirect to the home page
            }
        })
    }, []);     // This empty bracket mean that just call this functionality whenever we load the page

    // console.log("Movie is", movie);

    return (
        <Container>
            {movie && (     // If the movie exists, then only get the data of the movie and initially the error exists because we were trying to grab the backgroundImg of the movie that doesn't exist because the useEffect takes a few seconds to grab the data from the database
                <>          {/* This is an empty tag */}
                    <Background>
                        <img src={movie.backgroundImg} alt="" />
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg} alt="" />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </>
            )}
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    paddding: 0 calc(3.5vh + 5px);
    position: relative;
    overflow-y: hidden;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.4;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 40vh;
    min-height: 170px;
    width: 45vw;
    min-width: 200px;
    margin-top: 40px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        // margin-top: 20px;
    }
    // Fo the perfect image-size fit, we just have to give the image, the parent container and then we have to give the image the width and height as 100% and the object-fit.
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-left: 115px;
    margin-top: 30px;
`

const PlayButton = styled.button`
    border-radius: 4px;
    cursor: pointer;
    padding: 0 24px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    &:hover {
        background-color: rgb(198, 198, 198);
        color: rgb(0, 0, 0);
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    margin-right: 16px;
    background-color: rgba(0, 0, 0, 0.6);
    span {
        font-size: 30px;
        color: rgb(249, 249, 249);
    }
`

const GroupWatchButton = styled(AddButton)`
    background-color: rgba(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    margin-left: 115px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px;
    margin-left: 115px;
`