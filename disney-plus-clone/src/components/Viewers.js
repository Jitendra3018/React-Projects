import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
            </Wrap>
            <Wrap>
            <img src="/images/viewers-pixar.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border: 4px solid rgba(249, 249, 249, 0.1);
    cursor: pointer;
    border-radius: 10px;
    // overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;      //The transition number if given more than 250ms, then it will become too slow and if given higher than that, then it will become too fast
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {       // & contatenates the hover to the parent(Wrap)
        transform: scale(1.05);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgba(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`