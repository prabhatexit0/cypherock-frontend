import styled from 'styled-components'
import cylogo from '../../assets/cylogo.svg'

function Navbar() {
  return (
    <NavbarWrapper>
      <LogoContainer
        src={cylogo}
      />
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled('nav')`
  background-color: ${props => props.theme.bg};
  height: 10vh;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.border};

  display: flex;
  align-items: center;
  padding: 0 2rem;

`
// Todo: CSS Fix
const LogoContainer = styled('img')`
  height: auto;
  width: 15%; 
`