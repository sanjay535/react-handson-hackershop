function patientsDetails() {
  this.patDetails = {};
}

function appointmentDetails() {
  this.appDetails = {};
}

function administratorDetails() {
  this.currentUserId = undefined;
  this.adminDetails = {};
}

patientsDetails.prototype.add = function(name, email, dob, location, mobile) {
var id=Object.keys(this.patDetails).length+1 || 1;

  const newUser = {
    id,
    name,
    email,
    dob,
    location,
    mobile
  };
  this.patDetails[id] = newUser
  
  //const patDetails(id) = newUser;
}


patientsDetails.prototype.edit = function(id, name, email, dob, location, mobile) {
// const id=Object.keys(this.patDetails).length+1 || 1;
  this.patDetails[id] = {
    id,
    name,
    email,
    dob,
    location,
    mobile
  };
}


patientsDetails.prototype.getData = function() {
  
  return Object.values(this.patDetails);
};

patientsDetails.prototype.getName = function() {
  // return (this.patDetails.id && this.patDetails.id.name) || '';
  return Object.values(this.patDetails).map(patient => patient.name);
};

patientsDetails.prototype.getPatientDetails = function(id) {
  return this.patDetails[id] || undefined;
  // return this.patDetails.find(patient => patient.id === Number(id));
};



patientsDetails.prototype.viewPatientDetails = function(id) {
  return this.patDetails[id] || undefined;
  // return this.patDetails.find(patient => patient.id === Number(id));
};

patientsDetails.prototype.deletePatient = function(id) {
  delete this.patDetails[id] ;
}


appointmentDetails.prototype.add = function( name,  disease,  appdate,  slot,  description) {
  const appId=Object.keys(this.appDetails).length+1 || 1;
  this.appDetails[appId] = {
    appId,
    name,
    disease,
    appdate,
    slot,
    description
  };
}

appointmentDetails.prototype.edit=function(appId,name,disease,appdate,slot,description) {
  
  this.appDetails[appId]={
    appId,
    name,
    disease,
    appdate,
    slot,
    description
  };
}

appointmentDetails.prototype.getData = function() {
  
  return Object.values(this.appDetails);
};

appointmentDetails.prototype.getName = function() {
  return this.appDetails.map(
    appointmentPatientName => appointmentPatientName.name
  );
};

appointmentDetails.prototype.getAppointmentDetails = function(appId) {
  return this.appDetails[appId] || undefined;
}

appointmentDetails.prototype.viewAppointmentDetails = function(appId) {
  return this.appDetails[appId] || undefined;
}

appointmentDetails.prototype.deleteAppointment = function(appId) {
  delete this.appDetails[appId];
}

administratorDetails.prototype.add = function(name, email,password, dob,mobileno,location) {
  
  var adminId = Object.keys(this.adminDetails).length+1 || 1;
  this.adminDetails[adminId] = {
    adminId,
    name,
    email,
    password,
    dob,
    mobileno,
    location
  };
}

administratorDetails.prototype.getData = function() {
  
  return Object.values(this.adminDetails) || []
}

administratorDetails.prototype.getCurrentUser = function() {
  if(this.currentUserId) {
  return this.adminDetails[this.currentUserId]
}
return undefined;
}

administratorDetails.prototype.setCurrentUser = function(adminId) {
this.currentUserId=adminId;
}

export const patientDetailsData = new patientsDetails();

export const appDetailsData = new appointmentDetails();

export const adminDetailsData = new administratorDetails()

