import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "../App.css";
import NavBar from "./NavBar.jsx";
import { patientDetailsData } from "./data.js";
import Button from "../components/Button";

class EditPatient extends Component {
  constructor(props) {
    super(props);
      const patient = patientDetailsData.getPatientDetails(props.match.params.id) || undefined;
    this.state = {
      name: patient.name || "",
      email: patient.email || "",
      dob: patient.dob || "",
      location: patient.location || "",
      mobile: patient.mobile || "",
      patient: patient
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
    handleSubmit(e) {
  
    if (this.canBeSubmitted()) {
     
      e.preventDefault();
      
      patientDetailsData.edit(
        this.state.patient.id,
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      
      this.props.history.push("/allPatients");
    }
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
  handleCancel(e) {
    
    this.props.history.push("/allPatients");
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleDateChange=(date)=>{
    this.setState({dob:date});
  }

  render() {
    const { patient, name,email,location,mobile,dob } = this.state;
    if (!patient) {
      return (<div>Patient doesn't exist</div>)
    }
 
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em"
            }}
          >
            Edit patient
          </p>
        </div>
        <div className="FormCenter">
          
        <form onSubmit={this.handleSubmit} className="FormFields">
           <div> 
            <div className="FormField">
              <label className="FormField__Label">Name</label>
              <input id="name" value={name} onChange={this.handleChange} name="name" className="FormField__Input" type="text" placeholder="Enter full name" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">E-mail ID</label>
              <input id="email" value={email} onChange={this.handleChange} name="email" className="FormField__Input" type="text" placeholder="Enter email" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Date of Birth</label>
              <input
                id="dob"
                placeholderText="dd/mm/yy"
                className="FormField__Input"
                value={dob}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Location</label>
              <input id="location" value={location} onChange={this.handleChange} name="location" className="FormField__Input" type="text" placeholder="Please enter the location" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Mobile No</label>
              <input id="mobile" value={mobile} onChange={this.handleChange} name="mobile" className="FormField__Input" type="text" placeholder="Enter Mobile Number" />
            </div>
            <div className="add-patient-buttons"> 
            <Button
            type='submit'
            className="FormField__Button"
            >Register</Button>
            
            <Button 
            onClick={this.handleCancel}
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

export default EditPatient;