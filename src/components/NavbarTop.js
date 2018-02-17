import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'


class NavbarTop extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed-top">
            <Navbar  inverse collapseOnSelect>
              <Navbar.Header>
			    <img  className='navbar-brand' src='https://upload.wikimedia.org/wikipedia/commons/b/be/USNA%2C_OCS%2C_and_NROTC_anchor.png'alt="big ole' titles"/>

				  <Navbar.Brand>
				  <a href='/'>Slip List</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown eventKey={3} title="Actions" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} href='/availabilities/new' >Create Availability</MenuItem>
                    <MenuItem eventKey={3.2} href="/availabilities" >See all Availabilities</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3} href='/'>Home</MenuItem>
                  </NavDropdown>
                </Nav>
				<Nav pullRight>
                    {!this.props.isLoggedIn &&
                        <Nav pullRight>
                          <NavItem eventKey={1} href='/' >
                            Sign Up
                          </NavItem>
                          <NavItem eventKey={2} href="/">
                            Sign In
                          </NavItem>
                        </Nav>
                    }

					{this.props.isLoggedIn && <NavItem eventKey={3} href="/logout">
                    Sign Out
                  </NavItem>}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
      </div>
    );
  }
}

export default NavbarTop
