import './App.css'
import { GlobalStyle, darkTheme } from './theme/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import MainDisplay from './components/display/MainDisplay'
import styled from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Navbar/>
      <SidebarDisplayWrapper>
        <Sidebar/>
        <MainDisplay/>
      </SidebarDisplayWrapper>
    </ThemeProvider>
  )
}

export default App

const SidebarDisplayWrapper = styled('div')`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`
