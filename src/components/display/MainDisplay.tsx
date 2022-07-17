import styled from "styled-components"
import DefaultDisplay from "./DefaultDisplay"

function MainDisplay() {
  return (
    <MainDisplayWrapper>
      <DefaultDisplay/>
    </MainDisplayWrapper>
  )
}

export default MainDisplay

const MainDisplayWrapper = styled('div')`
  width: 100%;
`