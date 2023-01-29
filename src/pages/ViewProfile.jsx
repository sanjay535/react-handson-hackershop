import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {adminDetailsData} from "./data.js"
import "../App.css";
import Button from "../components/Button.jsx";




class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin : adminDetailsData.getCurrentUser() || {}
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount(){
    console.log('Admin=',this.state);
    if(Object.keys(this.state.admin).length===0){
      this.props.history.push("/sign-in");
    }
  }

  handleClose(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {
    
    const {admin} = this.state; 
    const dob=new Date(admin.dob)
    return (
      <div>
        <NavBar />
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Here are your details
          </h3>
        </div>

        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code to create labels for name,email,dob,mobileno and location */}
            <div className="view-patient-row">
                <div>Name</div>&nbsp;&ndash;&nbsp;
                <div>{admin.name}</div>
             </div>
             <div className="view-patient-row">
                <div>E-mail</div>&nbsp;&ndash;&nbsp;
                <div>{admin.email}</div>
             </div>
             <div className="view-patient-row">
                <div>Date of Birth</div>&nbsp;&ndash;&nbsp;
                <div>{`${dob.getDate()}/${dob.getMonth()+1}/${dob.getFullYear()}`}</div>
              </div>
             <div className="view-patient-row">
                <div>Mobile number</div>&nbsp;&ndash;&nbsp;
                <div>{admin.mobileno}</div>
             </div>
             <div className="view-patient-row">
                <div>Location</div>&nbsp;&ndash;&nbsp;
                <div>{admin.location}</div>
             </div>

            <div className="FormField">
              {/*Write code here to create a close button */}
              <Button onClick={this.handleClose} className="FormField__Button">Close</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewProfile;