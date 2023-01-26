import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {adminDetailsData} from "./data.js";

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

  handleDateChange=(date)=>{
    const dob=new Date(date);
    console.log('date=',dob);
    this.setState({dob:date});
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
              <label className="FormField__Label">Username</label>
              <input className="FormField__Input" type="text" placeholder="Enter your username" />
            </div>

            <div className="FormField">
              {/* Write code here to create Register Button */}
              <label className="FormField__Label">E-mail ID</label>
              <input className="FormField__Input" type="text" placeholder="Enter email" />
            </div>

            <div className="FormField">
              {/* Write code here to create Register Button */}
              <label className="FormField__Label">password</label>
              <input className="FormField__Input" type="text" placeholder="Enter password" />
            </div>

            <div className="FormField">
              {/* Write code here to create Register Button */}
              <label className="FormField__Label">Date of Birth</label>
               <DatePicker
                placeholderText="Enter date in format of dd/mm/yy"
                wrapperClassName="wrapper-date-picker"
                className="FormField__Input"
                dateFormat="dd/MM/yyyy"
                selected={this.state.dob}
                onChange={(date) =>this.handleDateChange(date)}
               />
            </div>

            <div className="FormField">
              {/* Write code here to create Register Button */}
              <label className="FormField__Label">Mobile No</label>
              <input className="FormField__Input" type="text" placeholder="Enter Mobile Number" />
            </div>

            <div className="FormField">
              {/* Write code here to create Register Button */}
              <label className="FormField__Label">Location</label>
              <input className="FormField__Input" type="text" placeholder="Please enter the location" />
            </div>

            <button className="FormField__Button">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;