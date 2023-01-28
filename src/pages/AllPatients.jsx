import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import { CONSTANTS } from "./constants.js";
class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
       //Write function to get the data of patients with the name as appointmentsList:
       patientsList:patientDetailsData.getData()
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleView(id) {
    
    this.props.history.push(`/viewPatient/${id}`);
  }
  handleEdit(id) {
    
    this.props.history.push(`/editPatient/${id}`);
  }
  handleDelete(e) {
    
    patientDetailsData.deletePatient(e);
    this.setState({
      patientsList: patientDetailsData.getData(),
    })
  }

  render() {
    const {patientsList} = this.state;
    
    return (
      <div style={{ height: "100%" }}>
          <NavBar activecomponent={CONSTANTS.ALL_PATIENTS}/>
        <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
          {patientsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Patients Found
            </h1>
          ) : (
          patientsList.map(patient=><div key={patient.id}>
            {patient.name}
          </div>)
          )}
        </form>
      </div>
    );
  }
}

export default AllPatients;