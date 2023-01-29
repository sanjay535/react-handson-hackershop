import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import AddPatient from "./AddPatient.jsx";
import { appDetailsData } from "./data";
import { CONSTANTS } from "./constants.js";
import Button from "../components/Button.jsx";

class AllAppointments extends Component {
  constructor() {
    super();
    this.state = {
       //Write function to get the appointment details with the name as appointmentsList:
       appointmentsList:appDetailsData.getData()
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleView(appId) {
    
    this.props.history.push(`/viewAppointment/${appId}`);
  }
  handleEdit(appId) {
    
    this.props.history.push(`/editAppointment/${appId}`);
  }
  handleDelete(appId){
    appDetailsData.deleteAppointment(appId);
    this.setState({appointmentsList:appDetailsData.getData()
    });
    
  }
  appsList() {
    if (this.state.appointmentsList.length == 0)
      return <h1>No Appointments Found</h1>;
  }
  render() {
    const {appointmentsList} = this.state;
    
    return (
      <div style={{ height: "100%" }}>
        <NavBar activecomponent={CONSTANTS.ALL_APPOINTMENTS}/>

        <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
          {appointmentsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Appoinments Found
            </h1>
          ) : (
            <div style={{ height: "100%", width: "100%" }}>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    fontSize: "2em",
                    color: "Slate Blue"
                  }}
                >
                  List of All Appointments
                </p>
              </div>
              {appointmentsList.map((appointment) => (
              <div key={appointment.appId}>
              <div className="all-patient-background">
                <div>{appointment.name}, {appointment.slot}</div>
                <div className="all-patient-Buttons">
                  <Button onClick={()=>this.handleView(appointment.appId)} className="all-patient-Button">View</Button>
                  <Button onClick={()=>this.handleEdit(appointment.appId)} className="all-patient-Button">Edit</Button>
                  <Button onClick={()=>this.handleDelete(appointment.appId)} className="all-patient-Button">Delete</Button>                     
                </div>
              </div>
          </div>
              
              ))}
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default AllAppointments;