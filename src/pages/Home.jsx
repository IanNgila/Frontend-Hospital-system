import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav/Nav";
import "../pages/App.css"
import {  Link } from "react-router-dom";

// import Card from 'react-bootstrap/Card'



const Home = () => {
  // const publicUrl = "https://calendar.google.com/calendar/embed?src=kariukimarkbrian%40gmail.com&ctz=UTC"
   <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Raleway" rel="stylesheet"/>
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
//   <link rel="stylesheet" href="assets/css/styles.css"/>
  return (
    <div className="body">
      <section  className="hero">
      <header>
        <nav id="hero">
          <ul>
          <li><Link to="/adminsignin" className="btn">Admin</Link></li>
          <li><Link to="/doctorsignin" className="btn">Doctor</Link></li>
          <li><Link to="/managersignin" className="btn">Manager</Link></li>
          <li><Link to="/signin" className="btn">Registrar</Link></li>
          </ul>

          {/* <li><Link to="/signup" className="btn">Admin</Link></li>
          <li><Link to="/signup" className="btn">Admin</Link></li> */}

        </nav>
      </header>

      <section  id="hospitale"  className="hero">
        <div className="hero-content-area">
          <h1>Hospital System</h1>
          <h3>Touching lives, one patient at a time</h3>
          <div id="contactus">
          <a href="#services" className="btn" > Our Services</a>
          <a href="mailto:ngilaian47@gmail.com" className="btn" >Contact Us Now</a>


          </div>

        </div>
      </section>
      </section>

      <section id="services" className="services">
        <h3 className="title">Some of our Services</h3>
        <p>In an age where malpractrice threatens the lives of our community, we aim to create a safe environment by emphasizing precautions,safety and welfare of our patients.
          We do that by striving to lower medical errors, reduce re-admissions,and educate our patients on how to live a healthy lifestyle.

        </p>
        <hr/>

        <ul className="grid">
          <li className="small image-1"></li>
          <li className="large image-2"></li>
          <li className="large image-3"></li>
          <li className="small image-4"></li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="title">Testimonials from our Patients</h3>
        <hr/>
        <p className="quote">I recently found myself under your care for a cardiac issue. While there, accompanied by my wife, we found that the entire staff at Jamaica Hospital was exceedingly professional and efficient, from your E.R. receptionists to the cardiac care team. You should be proud of your outstanding staff and service</p>
        <p className="author">- Albert Herter</p>
        <p className="quote">I was recently cared for at Jamaica Hospital following a heart attack while at JFK. I just wanted to say a few words about the exceptional care I received in the Jamaica Hospital Cardiac Care Unit and the MICU. All of the doctors and nurses were friendly, pleasant, kind, thorough, conscientious and professional. I am happy to have been in their care</p>
        <p className="author">- Sharon Rosenberg</p>
        <p className="quote">We would like to let you know how much we appreciate the special care our daughter was given by the doctors and staff at your hospital. Our baby’s physician was professional, kind, understanding, and her treatment was “right on.” Your organization should be proud to have such kind hearted people. They made sure that my daughter’s hospitalization was very pleasant.</p>
        <p className="author">- Luis Mendoza</p>
      </section>
   </div>
);
//   return (
//     //     <div >
//     //      <div class="container">
//     //   <div class="row">
//     //     <div class="col">
//     //     <Card style={{ width: '20rem', backgroundColor:'#0A9396', color: 'white' }}>
//     //   <Card.Img variant="top" src="holder.js/100px180" />
//     //   <Card.Body>
//     //     <Card.Title>DOCTORS</Card.Title>
//     //     <Card.Text>

//     //     </Card.Text>

//     //   </Card.Body>
//     // </Card>
//     //     </div>
//     //     <div class="col">
//     //     <Card style={{ width: '20rem',backgroundColor:'#F3529C', color: 'white' }}>
//     //   <Card.Img variant="top" src="holder.js/100px180" />
//     //   <Card.Body>
//     //     <Card.Title>PATIENTS</Card.Title>
//     //     <Card.Text>

//     //     </Card.Text>

//     //   </Card.Body>
//     // </Card>
//     //     </div>
//     //     <div class="col">
//     //     <Card style={{ width: '20rem' ,backgroundColor:'#0096C7', color: 'white' }}>
//     //   <Card.Img variant="top" src="holder.js/100px180" />
//     //   <Card.Body>
//     //     <Card.Title>STAFF</Card.Title>
//     //     <Card.Text>

//     //     </Card.Text>

//     //   </Card.Body>
//     // </Card>
//     //     </div>
//     //     <div class="col">
//     //     <Card style={{ width: '20rem' ,backgroundColor:'#F48C06', color: 'white'}}>
//     //   <Card.Img variant="top" src="holder.js/100px180" />
//     //   <Card.Body>
//     //     <Card.Title>APPOINTMENTS</Card.Title>
//     //     <Card.Text>

//     //     </Card.Text>

//     //   </Card.Body>
//     // </Card>
//     //     </div>
//     //   </div>
//     // </div>
//     //          <iframe className="calendar" src={publicUrl} >
//     //         </iframe>
//     //     </div>

//   );
};

export default Home;


