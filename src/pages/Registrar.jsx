import React, {useState} from "react"
import "../pages/App.css"
import { Container,Row, Col } from "react-bootstrap"

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
<Container>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
        <div className="formWrapper">
      <div className="form">
        <h2>Silver Crest Hospital</h2>
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
            <input type="reg_date" name="reg_date" id="reg_date" required onChange={handleChange}/>
            <label htmlFor="reg_date">Registration Date</label>
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
    </div></Col>
        <Col md={2}></Col>
      </Row>
    </Container>

 
{/* </body> */}
</>
  )
}

export default Registrar;
