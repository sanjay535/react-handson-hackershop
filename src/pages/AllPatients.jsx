import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import { CONSTANTS } from "./constants.js";
import Button from "../components/Button.jsx";
import './Pages.css';
class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
       //Write function to get the data of patients with the name as appointmentsList:
      //  patientsList:patientDetailsData.getData();
      patientsList:[
        {
          "id":1,
          "name": "Sanjay Gautam",
          "email": "sanjaykumargautam535@gmail.com",
          "dob": "2023-01-28T13:37:25.983Z",
          "location": "India",
          "mobile": "8839773038"
       },
       {
        "id":2,
        "name": "Rahul Saxena",
        "email": "sanjaykumargautam535@gmail.com",
        "dob": "2023-01-28T13:37:25.983Z",
        "location": "India",
        "mobile": "8839773038"
     }
      ]
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
          ) : 
            <div className="all-patient-details">
              {patientsList.map(patient=>
                <div key={patient.id}>
                  <div className="all-patient-background">
                    <div>{patient.name}</div>
                    <div className="all-patient-Buttons">
                      <Button onClick={()=>this.handleView(patient.id)} className="all-patient-Button">View</Button>
                      <Button onClick={()=>this.handleEdit(patient.id)} className="all-patient-Button">Edit</Button>
                      <Button onClick={()=>this.handleDelete(patient.id)} className="all-patient-Button">Delete</Button>                     
                    </div>
                  </div>
              </div>
              )}
          </div>}
        </form>
      </div>
    );
  }
}

export default AllPatients;