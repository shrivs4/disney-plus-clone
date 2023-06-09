import React from 'react';
import styled from 'styled-components';

const Header = () => {
    console.log("referesh")
  return (
    <Nav>
      <Logo src="/assets/images/logo.svg"/>
      <NavMenu>
        <a>
            <img src='/assets/images/home-icon.svg' />
            <span>HOME</span>
        </a>
        <a>
            <img src='/assets/images/search-icon.svg' />
            <span>SEARCH</span>
        </a>
        <a>
            <img src='/assets/images/watchlist-icon.svg' />
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src='/assets/images/original-icon.svg' />
            <span>ORIGINALS</span>
        </a>
        <a>
            <img src='/assets/images/movie-icon.svg' />
            <span>MOVIES</span>
        </a>
        <a>
            <img src='/assets/images/series-icon.svg' />
            <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src=''/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x:hidden;
`
const Logo = styled.img`
    width:80px;
`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor: pointer;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position: relative;
            &:after{
                content:"";
                height:2px;
                background-color:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform:scale(1);
                opacity:1;
            }
        }
    }
`
const UserImg = styled.div`
    width:48px;
    height:48px;
    background-color:white;
    border-radius:50%;
    cursor:pointer;
`
