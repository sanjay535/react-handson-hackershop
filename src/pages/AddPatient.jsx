import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import Button from "../components/Button.jsx";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
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
      dob.length > 0 &&
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
    const date=new Date();
    return (
      <div>
        <NavBar />
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
        
            <div className="FormField">
              <label className="FormField__Label">Name</label>
              <input onChange={this.handleChange} name="name" className="FormField__Input" type="text" placeholder="Enter full name" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">E-mail ID</label>
              <input onChange={this.handleChange} name="email" className="FormField__Input" type="text" placeholder="Enter email" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Date of Birth</label>
               <DatePicker
                placeholderText="dd/mm/yy"
                wrapperClassName="wrapper-date-picker"
                className="FormField__Input"
                dateFormat="dd/MM/yyyy"
                selected={this.state.dob}
                onChange={(date) =>this.handleDateChange(date)}
               />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Location</label>
              <input onChange={this.handleChange} name="location" className="FormField__Input" type="text" placeholder="Please enter the location" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Mobile No</label>
              <input onChange={this.handleChange} name="mobile" className="FormField__Input" type="text" placeholder="Enter Mobile Number" />
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
          </form>
        </div>
      </div>
    );
  }
}

export default AddPatient;