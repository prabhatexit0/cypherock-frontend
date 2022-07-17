import styled from "styled-components"
import Default from "./pages/default"

function Body() {
  return (
    <MainDisplayWrapper>
      <Default/>
    </MainDisplayWrapper>
  )
}

export default Body

const MainDisplayWrapper = styled('div')`
  width: 100%;
`