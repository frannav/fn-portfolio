import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles';

const theme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    grey: '#CACACE',
    blue: '#1f5cad',
    yellow: '#eca009', 
    orange: '#e85d04'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}