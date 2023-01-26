import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
       //Write function to get the data of patients with the name as appointmentsList:
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
          <NavBar />
        <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
          {patientsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Patients Found
            </h1>
          ) : (
          {/*Write code here to create all patients details*/}
          )}
        </form>
      </div>
    );
  }
}

export default AllPatients;