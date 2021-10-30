import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E; /*Primary Font Color*/
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'News Cycle', sans-serif;
    }

    body {
        font-size: 13px;
        background-color: var(--neutral-light);
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media(min-width: 768px) {
        body {
            font-size: 16px;
        }
    }
`;

export default GlobalStyle;