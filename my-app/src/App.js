import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Banner from './component/navbar/Banner';
import Profile from './component/navbar/Profile';
import { ThemeProvider } from 'styled-components';
import Darkmood from './component/darktheme/Darkmood';

const lightTheme = {
  pageBackground: "white",
  titleColor: '#dc6586',
  tagLineText: 'black'
}
const darkTheme = {
  pageBackground: "#282c36",
  titleColor: 'lightPink',
  tagLineText: 'lavender'
}
const themes = {
  light: lightTheme,
  dark: darkTheme
}


function App() {
  document.title = "Navbar";
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={themes[theme]}>
      <Navbar />
      <Banner theme={theme}/>
      <Profile />
      <Darkmood theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;