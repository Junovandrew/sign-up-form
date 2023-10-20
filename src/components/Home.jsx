import React from 'react';
import styled from 'styled-components';
import BackgroundImg from './assets/background.jpg';
import {BiSearch as SearchIcon} from 'react-icons/bi'
import {FaUserLarge as UserIcon} from 'react-icons/fa6'

const Home = () => {
  return (
    <Wrapper>
        <header>
            <div>
                <img src="" alt="" />
                <span>Home</span>
                <span>About</span>
                <span>Service</span>
                <span>Contact</span>
            </div>
            <div>
                <span>
                    <SearchIcon/>
                </span>
                <span>
                    <UserIcon/>
                </span>
            </div>
        </header>
        <main></main>
    </Wrapper>
  )
}

export default Home
const Wrapper = styled.div`
    background-image: url(./assets/background.jpg);
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;

`