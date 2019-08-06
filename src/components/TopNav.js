import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink as RRNavLink } from 'react-router-dom';
import { HashLink as RRHashLink } from 'react-router-hash-link';
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

    componentDidUpdate(prevProps, prevState) {

      console.log("Pathname: " + this.props.location.pathname)

      switch (this.props.location.pathname){
          case "/services_overview":
          case "/employee_relations":
          case "/training_and_learning":
          case "/talent_management":
          case "/strategy":
          case "/engagement_expertise":
          {
              document.getElementById("servicesDropdown").className = "navLink nav-link activeNavLink";
              break;
          }

          default:{
              document.getElementById("servicesDropdown").className = "navLink nav-link";
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
                  <Dropdown nav inNavbar onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropDownIsOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle nav id="servicesDropdown" className="navLink">
                        <span>Services</span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink tag={RRNavLink} className="navLink" activeClassName="activeNavLink" to="/services_overview" style={{fontWeight:"bold"}}>Overview</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink tag={RRHashLink} className="navLink" activeClassName="activeNavLink" to="/services_overview#project_management">Project Management</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink tag={RRHashLink} className="navLink" activeClassName="activeNavLink" to="/services_overview#strategic_planning">Strategic Planning</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink tag={RRHashLink} className="navLink" activeClassName="activeNavLink" to="/services_overview#engagement_and_retention">Engagement & Retention</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <NavItem>
                    <NavLink tag={RRNavLink} className="navLink" activeClassName="activeNavLink" to="/testimonials">Testimonials</NavLink>
                  </NavItem>
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