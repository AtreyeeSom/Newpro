import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
export const Header = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/post" className='chnge'>Post</Nav.Link>
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
