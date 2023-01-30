import React, { Component } from "react";
import NavBar from "./NavBar";
import {appDetailsData} from "./data.js"
import Button from "../components/Button";

class ViewAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
     appointment : appDetailsData.getAppointmentDetails(props.match.params.appId)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allAppointments");
  }

  render() {
   const {appointment} = this.state;
   if(!appointment) {
     return <h1>No appointments found</h1>
   }
   const date=new Date(appointment.appdate);
    return (
      <div>
        <NavBar />
        <div>
          <div>
            <p
              style={{
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "30px",
                fontSize: "2em"
              }}
            >
              Viewing Appointment
            </p>
          </div>
        </div>
        <div className="FormCenter">
        <div className="FormFields">
              {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
              <div id="name" className="view-patient-row">
                <span>Name&nbsp;&ndash;&nbsp;{appointment.name}</span>
              </div>
              <div id="disease" className="view-patient-row">
                <span>Disease&nbsp;&ndash;&nbsp;{appointment.disease}</span>
              </div>
              <div id="appdate" className="view-patient-row">
                <span>Date&nbsp;&ndash;&nbsp;{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</span>
              </div>
              <div id="slot" className="view-patient-row">
                <span>Slot&nbsp;&ndash;&nbsp;{appointment.slot}</span>
              </div>
              <div id="description" className="view-patient-row">
                <span>Description&nbsp;&ndash;&nbsp;{appointment.description}</span>
              </div>
                {/*Write code here to create close button */}
                <Button onClick={this.handleClose} className="FormField__Button">Close</Button>
            
            </div>
          </div>
        </div>
    );
  }
}

export default ViewAppointment;