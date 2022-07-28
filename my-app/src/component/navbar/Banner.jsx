import React from 'react';
import bannerStyle from './css/Banner.module.css';
import avatar from './img/codingbreast.png';
import styled from 'styled-components';

const Banner = (props) => {
    const changeTheme = () => {
        if (props.theme === 'light') {
            props.setTheme('dark')
        }
        else {
            props.setTheme('light')
        }
    }
    return (
        <Page className={bannerStyle.bannerSec}>
            <Container className={bannerStyle.bannerText}>
                <Title>I love coding</Title>
                <Pagetext>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quod, qui, assumenda quae voluptatum inventore est totam amet dolor provident accusantium necessitatibus veniam sit distinctio, cumque quasi neque aperiam porro ea. Incidunt repudiandae nulla explicabo odit atque quibusdam eveniet qui aliquam, quis et vero voluptates odio eaque recusandae quae natus.
                </Pagetext>
                <button>Get Started</button>
            </Container>
            <div className={bannerStyle.imgsec}>
                <img src={avatar} alt="coding" />
            </div>
        </Page>
    )
}

export default Banner;

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    background-color: ${props => props.theme.pageBackground};
    padding: 0 40px;
    min-height: 100vh;

`

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-basis: 50%;
`
const Title = styled.h2`
    font-size: 42px;
    font-weight: 800;
    color: ${props => props.theme.titleColor};
    margin-bottom: 20px;
`

const Pagetext = styled.p`
     font-size: 20px;
    text-align: justify;
    color: ${props => props.theme.tagLineText};
`