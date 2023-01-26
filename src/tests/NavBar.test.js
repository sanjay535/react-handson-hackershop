import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../pages/NavBar.jsx';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

configure({ adapter: new Adapter() });

describe("testing NavBar component", () => {
  let wrapper;
  const mockfn1 = jest.fn();

  test("checking the NavBar NavLink router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    const signIn = wrapper.find("NavLink").at(0);
    expect(signIn.props().to).toEqual("/addPatient");

  });
  test("checking the NavBar allpatients router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    const signIn = wrapper.find("NavLink").at(1);
    expect(signIn.props().to).toEqual("/allPatients");
  });
  test("checking the NavBar Book appointment router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    const signIn = wrapper.find("NavLink").at(2);
    expect(signIn.props().to).toEqual("/bookAppointment");

  });

  test("checking the NavBar all appointments router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    console.log("Wrapper",wrapper)
    const signIn = wrapper.find("NavLink").at(3);
    expect(signIn.props().to).toEqual("/allAppointments");

  });

  // test("checking the NavBar user router content", () => {
  //   const wrapper = shallow(
  //     <NavBar
  //     />
  //   );
  //   console.log(wrapper);
  //   const signIn=wrapper.find("DropdownItem").at(0);
  //   expect(signIn.props().to).toEqual("/viewProfile")

  // });

});
