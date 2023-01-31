import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import NavBar from "./NavBar.jsx";
import "../App.css";
import { appDetailsData } from "./data";
import { patientDetailsData } from "./data";
import { CONSTANTS } from "./constants.js";
import Button from "../components/Button.jsx";

class BookAppointment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      disease: "",
      appdate: "",
      slot: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownNameChange = this.handleDropdownNameChange.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleDropdownChange(e) {
    
    if(e.target.value === "N/A")
      alert("please select slot other than N/A")
    this.setState({ slot: e.target.value });
  }
  handleDropdownNameChange(e) {
    
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    if (this.canBeSubmitted()) {
      e.preventDefault();
     
      const {slot, name}=this.state;
      if(slot === "N/A" || name === "N/A")
      {
        alert("Please select slot and name values other than N/A")
      }
      else
      {
      alert("Appointment booked successfully");
      appDetailsData.add(
        this.state.name,
        this.state.disease,
        this.state.appdate,
        slot,
        this.state.description
      );
      this.props.history.push("/allAppointments");
    }
   }
  }

  handleCancel(e) {
    this.props.history.push("/allAppointments");
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
       name.length > 4 &&
      disease.length > 0 &&
      appdate.toString().length > 0 &&
      description.length > 0
    );
  }

  handleDateChange=(date)=>{
    this.setState({appdate:date});
  }

  render() {
    const names = patientDetailsData.getName();
    
    const isEnabled = this.canBeSubmitted();
    console.log('this.slots=',this.state);
    return (
      <div>
        <NavBar activecomponent={CONSTANTS.BOOK_APPOINTMENT}/>
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em"
            }}
          >
            Booking Appointment
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              {/*Write code here to create dropdown to list the name of patients, if no patients are avilable then it should be N/A */}
              <label className="FormField__Label" htmlFor="name">
                Name of the Patients
              </label>
              <select id="dropdown" className= "DropDowns" name="name" onChange={this.handleChange}>
                
                <option value="N/A">N/A</option>
                {names.map((name, i)=><option key={i} value={name}>{name}</option>)}
              </select>
            </div>
            <div className="FormField">
              <label className="FormField__Label">Disease</label>
              <input onChange={this.handleChange} name="disease" className="FormField__Input" type="text" placeholder="Enter Disease" />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Date</label>
               <DatePicker
                placeholderText="dd/mm/yy"
                wrapperClassName="wrapper-date-picker"
                className="FormField__Input"
                dateFormat="dd/MM/yyyy"
                selected={this.state.appdate}
                onChange={(date) =>this.handleDateChange(date)}
               />
            </div>
            {/*Write code here to create date and disease labels */}
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Slots
              </label>
              <select id="dropdown" className= "DropDowns" name="slot" onChange={this.handleChange}>
                
                <option value="N/A">N/A</option>
                <option value="10-11 AM">10-11 AM</option>
                <option value="1-2 PM">1-2 PM</option>
                <option value="3-4 PM">3-4 PM</option>
                <option value="6-8 PM">6-8 PM</option>
              </select>
    
            </div>

            <div className="FormField">
              <label className="FormField__Label">Description</label>
              <input onChange={this.handleChange} name="description" className="FormField__Input" type="text" placeholder="Enter Description" />
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

export default BookAppointment;