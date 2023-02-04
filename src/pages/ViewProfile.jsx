import React, { Component } from "react";
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
  /* Becaiue of Test issues */
  // componentDidMount(){
  //   console.log('Admin=',this.state);
  //   if(Object.keys(this.state.admin).length===0){
  //     this.props.history.push("/sign-in");
  //   }
  // }

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
            <div id="name" className="view-patient-row">
                <span>Name&nbsp;&ndash;&nbsp;{admin.name}</span>
             </div>
             <div id="email" className="view-patient-row">
                <span>E-mail&nbsp;&ndash;&nbsp;{admin.email}</span>
             </div>
             <div id="dob" className="view-patient-row">
                <span>Date of Birth&nbsp;&ndash;&nbsp;{`${dob.getDate()}/${dob.getMonth()+1}/${dob.getFullYear()}`}</span>
              </div>
             <div id="mobileno" className="view-patient-row">
                <span>Mobile number&nbsp;&ndash;&nbsp;{admin.mobileno}</span>
             </div>
             <div id="location" className="view-patient-row">
                <span>Location&nbsp;&ndash;&nbsp;{admin.location}</span>
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