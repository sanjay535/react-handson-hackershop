import React, { useState } from "react";
import Medilogo from "../images/Medi-Logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/*should have a Navbar brand, toggler and the NavItem (logout) should be linked to sign-in page */}
    </div>
  );
};
export default Example;
