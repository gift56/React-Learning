import React from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import styled from 'styled-components';


const Darkmood = (props) => {
    const changeTheme = () => {
        if (props.theme === 'light') {
            props.setTheme('dark')
        }
        else {
            props.setTheme('light')
        }
    }
    const icon = props.theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />
    return (
        <Page>
            <Container>
                <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>
                <Title>Coding for today</Title>
                <TagLine>Level Up your prestigsh</TagLine>
            </Container>
        </Page>
    )
}

export default Darkmood;

const Page = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100%;
      background-color: ${props => props.theme.pageBackground};
      transition: 300ms ease;
`

const Container = styled.div`
     display: flex; 
     align-items: center;
     flex-direction: column;
`

const Title = styled.h1`
     color: ${props => props.theme.titleColor};
     transition: 300ms ease;
`
const TagLine = styled.span`
     color: ${props => props.theme.tagLineText};
     transition: 300ms ease;
     font-size: 18px;
`
const Toggle = styled.span`
        background: ${props => props.theme.titleColor};
        color: ${props => props.theme.pageBackground};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex; 
        align-items: center;
        justify-content: center;
        transition: 300ms ease;
        cursor: pointer;
`
