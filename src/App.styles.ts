import styled, {createGlobalStyle} from "styled-components";
import BGImage  from './assets/herowall.jpg';
import BGImage2  from './assets/animewall.jpg';

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body {
    background-image: linear-gradient(rgba(0,0,0,.9), rgba(255,5,25,.7)), url(${BGImage});
    
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

}

`;

export const Wrapper  = styled.div`

 display: flex;
 flex-direction: column;
 align-items: center;

 > p {
    color: #fff;
 }

.score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
}

h1{
    background-image:linear-gradient(rgb(272,272,272), rgb(272,272,272));
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px gray);
    font-size: 70px;
    font-weight: 600;
    padding: 8px 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    text-align: center;

    margin: 20px
}


.start, .next {
    cursor: pointer;
    border: 2px solid #fff;
    font-weight: 500px;
    background-color: #000;
    box-shadow: 0px 5px 10px rgba(0,0,0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
}

.start{
    max-width: 200px;
}

`