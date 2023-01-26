import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
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
    if(!patient) {
      return <h1>No patients found</h1>
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
            Viewing Patient
          </p>
        </div>
        <div className="FormCenter">
          
            <form onSubmit={this.handleSubmit} className="FormFields">
              {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
              <div className="FormField">
                {/*Write code here to create close button */}
              </div>
            </form>
          
        </div>
      </div>
    );
  }
}
export default ViewPatient;