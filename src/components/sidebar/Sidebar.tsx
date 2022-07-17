import styled from "styled-components"

function Sidebar() {
  return (
    <SidebarWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar

const SidebarWrapper = styled('div')`
  height: 90vh;
  width: 21.9%;
  background-color: ${props => props.theme.secondary};
`

