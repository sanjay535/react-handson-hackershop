import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {appDetailsData} from "./data.js"

import "../App.css";

class EditAppointment extends Component {
  constructor(props) {
    super(props);
    const appointment  = appDetailsData.getAppointmentDetails(props.match.params.appId) || undefined;
    this.state = {
      name: appointment.name|| "",
      disease: appointment.disease||"",
      appdate: appointment.appdate || "",
      slot: appointment.slot || "",
      description: appointment.description || "",
      appointment:appointment
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleSubmit(e) {
    
    console.log("Details",this.state.appointment.appId,
         this.state.name,
         this.state.disease,
         this.state.appdate,
         this.state.slot,
         this.state.description)
      if(true) {
      e.preventDefault();
      
      appDetailsData.edit(
         this.state.appointment.appId,
         this.state.name,
         this.state.disease,
         this.state.appdate,
         this.state.slot,
         this.state.description
        );
      this.props.history.push("/allAppointments");
    }
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
      name.length > 0 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      slot.length > 0 &&
      description.length > 0
    );
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
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
    this.setState({appdate:date});
  }

  render() {
    const {appointment} = this.state;
    
    if(!appointment) {
    return (<h1>No appointments Found</h1>);
    }
    const {name, appdate, slot, disease, description}=this.state;
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
            Edit Appointment
          </p>
        </div>
        <div className="FormCenter">

          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
               {/*it should have fields like name, disease, appdate, slot, description, submit and cancel buttons */}
              <label className="FormField__Label" htmlFor="name">
                Name of the Patients
              </label>
              <select id="dropdown" className= "DropDowns" name="name" value={name} onChange={this.handleChange}>
                
                <option value="N/A">N/A</option>
                <option value="Sanjay Gautam">Sanjay Gautam</option>
                <option value="Raju Ahirwar">Raju Ahirwar</option>
              </select>
            </div>
            <div className="FormField">
              <label className="FormField__Label">Disease</label>
              <input value={disease} onChange={this.handleChange} name="disease" className="FormField__Input" type="text" placeholder="Enter Disease" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Date</label>
               <DatePicker
                placeholderText="dd/mm/yy"
                wrapperClassName="wrapper-date-picker"
                className="FormField__Input"
                dateFormat="dd/MM/yyyy"
                selected={appdate}
                onChange={(date) =>this.handleDateChange(date)}
               />
            </div>
            {/*Write code here to create date and disease labels */}
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Slots
              </label>
              <select id="dropdown" className= "DropDowns" name="slot" value={slot} onChange={this.handleChange}>
                
                <option value="N/A">N/A</option>
                <option value="10-11 AM">10-11 AM</option>
                <option value="1-2 PM">1-2 PM</option>
                <option value="3-4 PM">3-4 PM</option>
                <option value="6-8 PM">6-8 PM</option>
              </select>
    
            </div>

            <div className="FormField">
              <label className="FormField__Label">Description</label>
              <input value={description} onChange={this.handleChange} name="description" className="FormField__Input" type="text" placeholder="Enter Description" />
            </div>
           {/* Write code here to create description field,submit and cancel buttons */}
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
              
          </form>
        </div>
      </div>
    );
  }
}

export default EditAppointment;