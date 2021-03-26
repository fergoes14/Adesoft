import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

export default props => (
    <div>
      <Navbar  color="dark" light expand="md">
            <NavbarBrand className="text-white" href="/">Dog&Peoples</NavbarBrand>  
      </Navbar>
    </div>
)