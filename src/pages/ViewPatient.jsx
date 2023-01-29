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
    console.log('ViewPatient state=',this.state);
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
          
            <div className="FormFields">
              {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
              <div className="view-patient-row">
                <div>Name</div>&nbsp;&ndash;&nbsp;
                <div>{patient.name}</div>
              </div>
              <div className="view-patient-row">
                <div>E-mail</div>&nbsp;&ndash;&nbsp;
                <div>{patient.email}</div>
              </div>
              <div className="view-patient-row">
                <div>Date of Birth</div>&nbsp;&ndash;&nbsp;
                <div>{`${dob.getDate()}/${dob.getMonth()+1}/${dob.getFullYear()}`}</div>
              </div>
              <div className="view-patient-row">
                <div>Location</div>&nbsp;&ndash;&nbsp;
                <div>{patient.location}</div>
              </div>
              <div className="view-patient-row">
                <div>Mobile</div>&nbsp;&ndash;&nbsp;
                <div>{patient.mobile}</div>
              </div>
              <div className="FormField">
                {/*Write code here to create close button */}
                <Button onClick={this.handleClose} className="FormField__Button">Close</Button>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
}
export default ViewPatient;