
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'tailwindcss/tailwind.css';

import '../styles/globals.css';
import '../styles/index.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
   
    
        <>
          <div style={{ zIndex: 999999999999, position: 'fixed' }}>
         
          </div>{' '}
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
   

  );
}

export default MyApp;
