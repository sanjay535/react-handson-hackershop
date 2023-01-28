import React, { useState } from "react";
import Medilogo from "../images/Medi-Logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";
import { CONSTANTS } from "./constants";
import "./Pages.css";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav]=useState(props.activecomponent);
  const toggle = () => setIsOpen(!isOpen);
 

  console.log('activeNav=',activeNav);
  return (
    <div>
      <Navbar {...props} className="nav-background" dark  expand={'lg'}>
      <NavbarBrand href="/">
          <img
            alt="logo"
            src={Medilogo}
            style={{
              height: 60,
              width: 60
            }}
          />
          <span style={{color:'#000'}}>DMRD</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} style={{display:'flex', justifyContent:'flex-end' }} navbar>
          <Nav navbar>
            <NavItem>
              <ReactLink onClick={()=>setActiveNav(CONSTANTS.ADD_PATIENT)} activeClassName={(activeNav===CONSTANTS.ADD_PATIENT)?'active':''} className="nav-color" to="/addPatient">Add Patient</ReactLink >
            </NavItem>
            <NavItem>
              <ReactLink onClick={()=>setActiveNav(CONSTANTS.ALL_PATIENTS)} activeClassName={(activeNav===CONSTANTS.ALL_PATIENTS)?'active':''}  className="nav-color" to="/allPatients">All Patients</ReactLink>
            </NavItem>
            <NavItem>
              <ReactLink onClick={()=>setActiveNav(CONSTANTS.BOOK_APPOINTMENT)} activeClassName={(activeNav===CONSTANTS.BOOK_APPOINTMENT)?'active':''}  className="nav-color" to="/bookAppointment">Book Appointment</ReactLink>
            </NavItem>
            <NavItem>
              <ReactLink onClick={()=>setActiveNav(CONSTANTS.ALL_APPOINTMENTS)} activeClassName={(activeNav===CONSTANTS.ALL_APPOINTMENTS)?'active':''}  className="nav-color" to="/allAppointments">All Appointments</ReactLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="nav-color" nav caret>
                User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  <ReactLink style={{ textDecoration: 'none' }} to="/viewProfile" >View Profile</ReactLink> 
               </DropdownItem>
               <DropdownItem divider />
               <DropdownItem>
               <ReactLink style={{ textDecoration: 'none' }} to="/sign-in" >Logout</ReactLink> 
               </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Example;
