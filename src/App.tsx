import './App.css'
import { GlobalStyle, darkTheme } from './theme/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Navbar/>
      <Sidebar/>
    </ThemeProvider>
  )
}

export default App
