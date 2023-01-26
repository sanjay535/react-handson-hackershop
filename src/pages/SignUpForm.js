import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import {adminDetailsData} from "./data.js"

import "../App.css";
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      password: "",
      dob: "",
      mobileno: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) { 
    
    e.preventDefault();
    
    if (this.canBeSubmitted()) {
      adminDetailsData.add(
        this.state.uname,
        this.state.email,
        this.state.password,
        this.state.dob,
        this.state.mobileno,
        this.state.location
        );
      this.setState({name: e.target.value});
      this.props.history.push("/sign-in");
    }
  }
  canBeSubmitted() {
    const {
      uname,
      email,
      password,
      dob,
      mobileno,
      location
      
      
    } = this.state;
    return (
      uname.length > 4 &&
      email.length > 4 &&
      password.length > 4 &&
      dob.length > 4 &&
      mobileno.length > 4 &&
      location.length > 4 
      
    );
  }

  render() {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              Login
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              Register
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="FormFields">
        
            
            {/*Write code here to create uname, email, dob, location, mobileno labels and inputs */}
            
            <div className="FormField">
              {/* Write code here to create Register Button */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;