import { createGlobalStyle } from 'styled-components';

const Globalstyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        color: ${(props) => props.theme.colors.colorFogra};
        background-color: ${(props) => props.theme.colors.colorCultured};
        font-size: 1.15em;
        font-family: "poppins", "sans-serif";
    }

    p {
      line-height: 1.5;
    }
    
    img {
      max-width: 100%;
      max-height: 100%;
    }
`;

export default Globalstyles;
