import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "NamumGothic", serif;

    ::-webkit-scrollbar {
        width: 3.5px;
        height: 3.5px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background-clip: padding-box;
        background-color: rgba(168, 168, 168, 0.6);
    }
  }

  .sb-show-main, .docs-story {
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.typography.default};
  }
`;

export default GlobalStyle;
