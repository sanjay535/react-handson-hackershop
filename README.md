Let’s build a front end application using reactjs

This is a hospital application which should have following features:

SignIn and SignUp pages. User should register before login. Once registered he should be redirected to login page.

    --SignUp page should have fields like first Username,E-mail ID,Password,Date of Birth,Mobile No
,Location and a Register button.
    
    --SignIn page should have fields like E-Mail Address, Password and a login button.

Note: Users whose credentials are valid only they should login or else it should throw error like “Invalid Credentials”
Please refer to the screenshots attached below for more information

-- After login user will be taken to home page.

	- Home page should have a Navbar like shown below and it should have Navlinks related to Add patient, All Patients, Book Appointment, All Appointments and drop down related to the user showing view profile and Logout
          <NavBar image> 
 
        - All Patients page is displayed if there are no patients it should display “No Patients Found” or else “list of all patients with name and Buttons “View” and “Edit”

 — To add a patient

	- Add patient should have a form and it should contain fields like Name, E-mail ID, Date of birth, Location,Mobile
And buttons like Register and Cancel 
 
         - Click on Register you can add a patient and the patient should be added in all patients 
— Viewing a patient

        - View patient is also a form and it should view the details of patient
       - It have the fields same as add patient and a button “Close” at the end of form as shown in the figure.

— Editing a patient

	- Edit patient is a form and it should edit the details of the patient
	- It have the fields same as add patient and buttons “Submit” and “Cancel” at the end of form as shown in the figure

— To book a appointment

         - Book appointment should have a form and it should contain fields like Name of the Patient, Disease, Date, Slots, Description, and buttons “Book Now” and “Cancel”
	- Dropdowns are created for Name of the patient and slots 
        - Add slots like as shown in the image 

        - Slots for names like as shown in the figure

 
        - Click on Book now and it should be redirected to all appointments page

— All appointments
	- All appointments should display the appointments for patient and it should display the name of the patient and slot as shown in the figure


- Viewing a appointment
	- View appointment is also a form and it should view the details of appointment
        - It has the fields same as add appointment and a button “Close” at the end of form as shown in the figure

— Editing a appointment

	- Edit appointment is a form and it should edit the details of the appointment
	- It have the fields same as book appointment and buttons “Submit” and “Cancel” at the end of form as shown in the figure

— Deleting a appointment

 	- Delete button should delete the details of appointment
 
— User

	- User has one dropdown which contains View Profile and Logout 

	- Logout redirected to the Loginin page

