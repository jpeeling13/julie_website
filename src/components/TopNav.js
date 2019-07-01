import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button } from 'reactstrap';

class TopNav extends Component {

    state = {
        isOpen: false,
        dropDownIsOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropDownIsOpen: !prevState.dropDownIsOpen
        }));
    }

    onMouseEnter = () => {
        this.setState({
            dropDownIsOpen: true
        });
    };

    onMouseLeave = () => {
        this.setState({
            dropDownIsOpen: false
        });
    }

    componentDidMount() {
        console.log(this.props.location.pathname);
    }

    componentDidUpdate(prevProps, prevState) {

        switch (this.props.location.pathname){
            case "/resourcelinkone":
            case "/resourcelinktwo":
            case "/resourcelinkthree":
            {
                document.getElementById("resourceDropDown").className = "navLink nav-link activeNavLink";
                break;
            }

            default:{
                document.getElementById("resourceDropDown").className = "navLink nav-link";
                console.log("Got here");
            }
        }
        
    }

    render() {
        return (
            <div>
            <Navbar color="light" light expand="md" id="navbar">
              <NavbarBrand href="/"><img src="/jeast_hr_logo_full.ico" style={{width:"250px"}}/></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={RRNavLink} className="navLink" activeClassName="activeNavLink" to="/" exact>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} className="navLink" activeClassName="activeNavLink" to="/testimonials">Testimonials</NavLink>
                  </NavItem>
                  <Dropdown nav inNavbar onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropDownIsOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle nav id="resourceDropDown" className="navLink">
                        <span>Resources</span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink tag={RRNavLink} className="navLink" activeClassName="activeNavLink" to="/resourcelinkone">Resource Link One</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink tag={RRNavLink} className="navLink" activeClassName="activeNavLink" to="/resourcelinktwo">Resource Link Two</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink tag={RRNavLink} className="navLink" activeClassName="activeNavLink" to="/resourcelinkthree">Resource Link Three</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <NavItem>
                    <NavLink tag={RRNavLink} className="navLink" id="contact_link" to="/contact"><span id="contact_link_button">Contact</span></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }


}

export default TopNav;