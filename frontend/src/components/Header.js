import React from "react"
import { Container, Navbar } from "react-bootstrap"
import { ReactComponent as Logo } from "../images/logo.svg"

const Header = (props) => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Logo style={{maxWidth: "15rem", maxHeight: "3rem"}} />
      </Container>
    </Navbar>
  )
}

export default Header
