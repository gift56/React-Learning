import React from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import styled from 'styled-components';


const Darkmood = ({ theme, setTheme }) => {
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    const icon = theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />
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
      background-color: ${theme => theme.pageBackground};
      transition: 300ms ease;
`

const Container = styled.div`
     display: flex; 
     align-items: center;
     flex-direction: column;
`

const Title = styled.h1`
     color: ${theme => theme.titleColor};
     transition: 300ms ease;
     
`
const TagLine = styled.span``
const Toggle = styled.span``
