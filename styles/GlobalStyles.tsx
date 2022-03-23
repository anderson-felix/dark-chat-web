import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding: 0;
    margin: 0;

    /* Firefox scrollbar customization */
    scrollbar-width: thin;

    @media(max-width: ${props => props.theme.breakingPoints.mobile}px) {
      scrollbar-width: 0; /* Firefox */
    }
  }

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;

    @media(max-width: ${props => props.theme.breakingPoints.mobile}px) {
      display: none;
    }
  }

  *::-webkit-scrollbar-button {
    opacity: 0;
    height: 0;
    width: 0;
  }

  *::-webkit-scrollbar-track {
    opacity: 0;
  }
  
  *::-webkit-scrollbar-corner {
    opacity: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html,
  body,
  #root {
    height: 100%;
    overflow: hidden;
  }
`;
