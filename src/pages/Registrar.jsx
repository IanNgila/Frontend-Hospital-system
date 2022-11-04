import React, {useState} from "react"
import "../pages/App.css"

const Registrar=(props)=>{
const[formData, setFormData] = useState({
  username: "",
  ticket_no: "",
  patient_no: "",
  reg_date: "",
  address: "",
  dob: "",
  contact_no: "",
  email: "",
  guardian: "",
  relation: "",
  gender: "",
  patient_status: ""



})
const handlePostSubmit = (event) =>{
  event.preventDefault();

  fetch("/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then(setFormData)
    setFormData({ticket_no:"", address:""})
  console.log(formData);
}
const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
};
  return(
<>
{/* <body id="signup"> */}

  <main className="container">

    <div className="back"></div>
    <div className="brand">
      <div className="logo">
        <img height="64" src="https://thumbs.dreamstime.com/b/caduceus-medical-symbol-isolated-white-background-d-render-caduceus-medical-symbol-isolated-145721309.jpg" alt="Panda Logo" />
        <h1>
          <span className="name"><span></span></span>Silver Crest Hospital
        </h1>
      </div>
      {/* <span className="copyright">Photo by
        <a href="https://unsplash.com/@filipz" target="_blank" rel="noreferrer" title="Photographer">Filip Zrnzević</a>
        on
        <a href="https://unsplash.com/photos/QsWG0kjPQRY" target="_blank" rel="noreferrer"title="Background Photo">Unsplash</a></span> */}
    </div>

    <div className="formWrapper">
      <div className="form">
        <h2>Registrar Form</h2>
        <form onSubmit={handlePostSubmit} id="form" method="get" action="#">
          <div className="inputWrapper">
            <input type="text"name="ticket_no" id="first" onChange={handleChange}required />
            <label htmlFor="first">Ticket Number</label>
          </div>
          <div className="inputWrapper">
            <input type="text" name="patient_no" id="last" onChange={handleChange} required />
            <label htmlFor="last">Patient Name</label>
          </div>
          <div className="inputWrapper">
            <input type="date" name="reg_date" id="reg_date" required onChange={handleChange}/>
            <label htmlFor="reg_date"></label>
          </div>
          <div className="inputWrapper">
            <input type="Address" name="address" id="Address" onChange={handleChange} required />
            <label htmlFor="Address">Address</label>
          </div>
          <div className="inputWrapper">
            <input type="dob" name="dob" id="dob"onChange={handleChange} required />
            <label htmlFor="dob">Date of Birth</label>
          </div>
          <div className="inputWrapper">
            <input type="contact_no" name="contact_no" id="contact_no" onChange={handleChange}required />
            <label htmlFor="contact_no">Phone Number</label>
          </div>
          <div className="inputWrapper">
            <input type="email" name="email" id="email" onChange={handleChange}required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="inputWrapper">
            <input type="tel" name="guardian" id="guardian" onChange={handleChange}required />
            <label htmlFor="guardian">Guardian Contact</label>
          </div>
          <div className="inputWrapper">
            <input type="relation" name="relation" id="relation" onChange={handleChange}required />
            <label htmlFor="relation">Guardian Relation</label>
          </div>
          <div className="inputWrapper">
            <input type="gender" name="gender" id="gender" onChange={handleChange}required />
            <label htmlFor="gender"> gender</label>
          </div>
          <div className="inputWrapper">
            <input type="patient_status" name="patient_status" id="patient_status" onChange={handleChange}required />
            <label htmlFor="patient_status"> patient_status</label>
          </div>
        </form>
        <input form="form" type="submit" name="register" id="register" value="REGISTER" />


      </div>
    </div>
    </main>
{/* </body> */}
</>
  )
}

export default Registrar;
