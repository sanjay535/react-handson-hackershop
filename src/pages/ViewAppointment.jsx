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
        <div className="FormFields">
              {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
              <div className="view-patient-row">
                <div>Name</div>&nbsp;&ndash;&nbsp;
                <div>{appointment.name}</div>
              </div>
              <div className="view-patient-row">
                <div>Disease</div>&nbsp;&ndash;&nbsp;
                <div>{appointment.disease}</div>
              </div>
              <div className="view-patient-row">
                <div>Date</div>&nbsp;&ndash;&nbsp;
                <div>{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</div>
              </div>
              <div className="view-patient-row">
                <div>Slot</div>&nbsp;&ndash;&nbsp;
                <div>{appointment.slot}</div>
              </div>
              <div className="view-patient-row">
                <div>Description</div>&nbsp;&ndash;&nbsp;
                <div>{appointment.description}</div>
              </div>
              <div className="FormField">
                {/*Write code here to create close button */}
                <Button onClick={this.handleClose} className="FormField__Button">Close</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewAppointment;