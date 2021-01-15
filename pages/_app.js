import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme, darkTheme } from '../styles/GlobalStyles';


export default function App({ Component, pageProps }) {


  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}