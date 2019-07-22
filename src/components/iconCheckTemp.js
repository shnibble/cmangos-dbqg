import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: inline-block;
    position: relative;
    height: 10px;
    width: 10px;
    vertical-align: top;
    animation-name: fade-out;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-delay: 1s;
    animation-fill-mode: forwards;

    > div {
        position: absolute;
        height: 3px;
        background: #009933;
    }

    > div:nth-child(1) {
        top: 5px;
        width: 6px;
        transform: rotate(40deg); 
    }

    > div:nth-child(2) {
        top: 3px
        left: 2px;
        width: 10px;
        transform: rotate(-50deg);        
    }

    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 0;
        }
        100% {
            opacity: 0;
            display: none;
        }
    }
`

const IconCheckTemp = () => {
    return (
        <Container>
            <div></div>
            <div></div>
        </Container>
    )
}

export default IconCheckTemp