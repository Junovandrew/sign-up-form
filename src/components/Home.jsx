import React from 'react';
import styled from 'styled-components';
import BackgroundImg from './assets/background.jpg';
import {BiSearch as SearchIcon} from 'react-icons/bi';
import {FaUserLarge as UserIcon} from 'react-icons/fa6';
import {FaPaperPlane as PlaneIcon} from 'react-icons/fa6';
import {BsInstagram as InstagramIcon} from 'react-icons/bs';
import {BsFacebook as FacebookIcon} from 'react-icons/bs';
import {AiOutlineTwitter as TwitterIcon} from 'react-icons/ai';
import {BiLogoGithub as GithubIcon} from 'react-icons/bi';
import {MdMail as MailIcon} from 'react-icons/md';
import {BiSolidLockAlt as LockIcon} from 'react-icons/bi'

const Home = () => {
  return (
    <Wrapper>
        <header>
            <div>
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
        <main>
            <div>
                <div>
                    <span><PlaneIcon/></span>
                    <h2>Ddoans</h2>
                </div>
                <div>
                    <h1>Welcome!</h1>
                    <span>To Our Nem Website</span>
                </div>
                <div>
                    <span>
                        Lorem, ipsum dolor sit amet consectetur 
                        <br />
                        adipisicing elit.Beatae,asperiores
                    </span>
                    <div>
                        <span><InstagramIcon/></span>
                        <span><FacebookIcon/></span>
                        <span><TwitterIcon/></span>
                        <span><GithubIcon/></span>
                    </div>
                </div>
            </div>
            <div>
                <form action="submit">
                    <label>Login</label>
                    <label>
                        <input type="email" placeholder='Email'/>
                        <span><MailIcon/></span>
                    </label>
                    <label>
                        <input type="password" placeholder='Password'/>
                        <span><LockIcon/></span>
                    </label>
                    <div>
                        <label>
                            <input type="checkbox"/>
                            <span>Remember me</span>
                        </label>
                        <span>Forgot Password?</span>
                    </div>
                    <button>Login</button>
                </form>
                <div>
                    <span>Don't have an account?<a href="#">Sign up</a></span>
                </div>
            </div>
        </main>
    </Wrapper>
  )
}

export default Home
const Wrapper = styled.div`
    
    height: 100vh;
    width: 100%;
    opacity: 1;
    display: flex;
    flex-direction: column;
    z-index: -5;
    position: absolute;
    left: 0px;
    top: 0px;
    border: 0;
    outline: 0;
    &::before{
        background-image: url(${BackgroundImg});
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
        position:absolute;
        width:100dvw;
        height:100dvh;
        top:0;
        left:0;
        content:'';
        filter:blur(5px);
        border: 0;
        outline: 0;
        transform: scale(1.1);
    }

    & > header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 20px 100px 10px 180px;
        z-index: 5;
        & > div{
            display: flex;
            gap: 20px;
            color:white;
            font-size: 18px;
            font-weight: 500;
        }
        & > div:nth-child(2){
            font-size: 20px;
            & > span:first-child{
                font-size: 25px;
            }
        }
    }
    & > main{
        align-self: center;
        display: flex;
        flex-direction: row;
        width: 65%;
        height: 500px;
        box-shadow: 6px 6px 13px 3px rgba(0,0,0,0.4);
        margin-top: 35px;
        background-image: url(${BackgroundImg});
        background-position:center;
        border-radius: 4px;
        z-index: 5;

        & > div:first-child{
            position: relative;
            z-index:1;
            display: flex;
            flex-direction: column;
            width: 60%;
            align-items: center;
            padding: 55px 80px 50px 50px;
            & > div:first-child{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-self: flex-start;
                width: 100%;
                margin-bottom: 45px;
                padding-left: 10px;
                & > h2{
                    margin: 0;
                    font-weight: 500;
                    font-size: 44px;
                }
                & > span{
                    font-size: 30px;
                }
            }
            & > div:nth-child(2){
                display: flex;
                justify-self: flex-start;
                flex-direction: column;
                width: 100%;
                gap: 6px;
                align-items: center;
                margin-bottom: 20px;
                & > h1{
                    margin:0;
                    font-size: 60px;
                    letter-spacing: 5px;
                    font-weight: 600;
                }
                & > span{
                    font-size: 30px;
                    font-weight: 500;
                }
            }
            & > div:nth-child(3){
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                color: #d1d1d1;
                gap:15px;
                & > span{
                    text-align: center;
                    font-size: 15px;
                }
                & > div{
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    font-size: 20px;
                    /* align-items: flex-end; */
                    justify-content: center;
                    & > span:nth-child(3),
                    & > span:nth-child(4){
                        font-size: 25px;
                    }
                    & > span{
                        align-items: center;
                        display: flex;
                    }
                }
            }
        }
        & > div:nth-child(2){
            position:relative;
            z-index:1;
            display: flex;
            flex-direction: column;
            width: 40%;
            justify-content: center;
            height: 100%;
            /* margin-top: 30px; */
            z-index:2;
            /*  */
            &::before{
                background-image: url(${BackgroundImg});
                background-repeat:no-repeat;
                background-position:right;
                position:absolute;
                width:100%;
                height:100%;
                top:0;
                left:0;
                filter: blur(8px);
                content:'';
            }
            & > form{
                display: flex;
                flex-direction: column;
                gap: 30px;
                padding: 30px 30px 0 30px;
                position: relative;
                & > label:first-of-type{
                    align-self: center;
                    font-size: 30px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                & > label:nth-child(2),
                & > label:nth-child(3){
                    
                    &> input{
                        width: 100%;
                        background-color: transparent;
                        border: none;
                        border-bottom: 2px solid #2e2d2d;
                        font-size: 16px;
                        font-weight: 500;
                        color: #fff;
                    }
                }
                & > label:nth-child(2){
                    & > span{
                        position: absolute;
                        right: 0px;
                        top: 120px;
                        font-size: 20px;
                    }
                }
                & > label:nth-child(3){
                    & > span{
                        position: absolute;
                        right: 0px;
                        top: 172px;
                        font-size: 20px;
                    }
                }
                & > div{
                    display: flex;
                    justify-content: space-between;
                }
                & >button{
                    align-self: center;
                    width: 100%;
                    padding: 8px;
                    border-radius: 5px;
                    border:none;
                    background-color: rgb(53, 32, 32);
                    color: #fff;
                    font-size: 20px;
                    font-weight: 500;
                }
            }
            & > div{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 15px;
                & > span{
                    font-weight: 500;
                    & > a{
                        color: #fff;
                        font-weight: 700;
                    }
                }

            }
        }
    }
`