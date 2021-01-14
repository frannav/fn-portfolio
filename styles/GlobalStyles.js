import { createGlobalStyle } from 'styled-components';

export const theme = {
    light: {
        bg: '#fff',
        fontColor: '#000' 
    },

    dark: {
        bg: '#000',
        fontColor: '#fff' 
    }
}


export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body {
        margin: 0 auto;
        max-width: 950px;
        background-color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        color: #fff;
    }
    

    h1 {
        font-size: 42px;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 38px;
        margin: 0;
        padding: 0;
    }

    h3 {
        font-size: 34px;
        margin: 0;
        padding: 0;
    }

    h4 {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }

    h5 {
        font-size: 26px;
        margin: 0;
        padding: 0;
    }

    h6 {
        font-size: 22px;
        margin: 0;
        padding: 0;
    }

    p {
        font-size: 21px;
        margin: 0;
        padding: 0;
        color: #24272E;
    }

    a {
        font-size: 21px;
        text-decoration: none;
        color: inherit;
    }

`