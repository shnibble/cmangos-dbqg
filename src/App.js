import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Styled from 'styled-components'
import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import Content from './components/content'

const Wrapper = Styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

class App extends React.Component {
    render = () => {
        return (
            <Router>
                <Wrapper>
                    <Header />
                    <Nav />
                    <Content />
                </Wrapper>
            </Router>
        )
    }
}

export default App
