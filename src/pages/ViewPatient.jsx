import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
import Button from "../components/Button";
import './Pages.css';
class ViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
     patient : patientDetailsData.viewPatientDetails(props.match.params.id)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allPatients");
  }

  render() {
    const {patient} = this.state;
    // console.log('ViewPatient state=',this.state);
    if(!patient) {
      return <h1>No patients found</h1>
    }
    const dob=new Date(patient.dob);
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
            Viewing Patient
          </p>
        </div>
        <div className="FormCenter">
          <div>
            <div className="FormFields">
              {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
              <div id="name" className="view-patient-row">
                <span>Name&nbsp;&ndash;&nbsp;{patient.name}</span>
              </div>
              <div id="email" className="view-patient-row">
                <span>E-mail&nbsp;&ndash;&nbsp;{patient.email}</span>
              </div>
              <div id="dob" className="view-patient-row">
                <span>Date of Birth&nbsp;&ndash;&nbsp;{`${dob.getDate()}/${dob.getMonth()+1}/${dob.getFullYear()}`}</span>
              </div>
              <div id="location" className="view-patient-row">
                <span>Location&nbsp;&ndash;&nbsp;{patient.location}</span>
              </div>
              <div id="mobile" className="view-patient-row">
                <span>Mobile&nbsp;&ndash;&nbsp;{patient.mobile}</span>
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
export default ViewPatient;