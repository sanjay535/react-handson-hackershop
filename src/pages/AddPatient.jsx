import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import Button from "../components/Button.jsx";
import { CONSTANTS } from "./constants.js";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: new Date(),
      location: "",
      mobile: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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
    if (this.canBeSubmitted()) {
      alert("Patient Added successfully");
      patientDetailsData.add(
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      this.props.history.push("/allPatients");
    }
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }
  canBeSubmitted() {
    const { name, email, dob, location, mobile } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      dob.toString().length > 0 &&
      location.length > 0 &&
      mobile.length > 0
    );
  }

  handleDateChange=(date)=>{
    this.setState({dob:date});
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const name = this.state.name;
    const date=this.state.dob || new Date();
    return (
      <div>
        <NavBar activecomponent={CONSTANTS.ADD_PATIENT} />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em"
            }}
          >
            Adding a Patient
          </p>
        </div>
        {/* Write code here to create fields and input labels for name,email,dob,mobileno and location  */}
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
           <div>
            <div className="FormField">
              <label className="FormField__Label">Name</label>
              <input id="name" onChange={this.handleChange} name="name" className="FormField__Input" type="text" placeholder="Enter full name" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">E-mail ID</label>
              <input id="email" onChange={this.handleChange} name="email" className="FormField__Input" type="text" placeholder="Enter email" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Date of Birth</label>
               
               <input
                type='date'
                id="dob"
                name="dob"
                className="FormField__Input"
                dateFormat="dd/MM/yyyy"
                value={this.state.dob}
                onChange={this.handleChange}
               />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Location</label>
              <input id="location" onChange={this.handleChange} name="location" className="FormField__Input" type="text" placeholder="Please enter the location" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Mobile No</label>
              <input id="mobile" onChange={this.handleChange} name="mobile" className="FormField__Input" type="text" placeholder="Enter Mobile Number" />
            </div>
            <div className="add-patient-buttons"> 
            <Button 
             type='submit'
             className="FormField__Button"
            >Register</Button>
            
             <Button 
             type='button'
             className="FormField__Button"
            >Cancel</Button>
            </div> 
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPatient;