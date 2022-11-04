import React from 'react'
import useFetch from '../customHooks/UseFetch';
import { useParams, Link } from 'react-router-dom';

const PatientCard = ({patient}) => {
  console.log(patient)
  //  const { data: patient, error, loading } = useFetch("/patients/" + id);
 const {id} = useParams()  
  return (
    <div className="card my-4">
      {/* <!-- Card image --> */}
        {/* <img
          className="card-img-top"
          src="https://thumbs.dreamstime.com/b/psychiatric-patient-avatar-character-vector-illustration-design-88377725.jpg"
          alt="Card image cap"
        /> */}

      {/* <!-- Card content --> */}
      <div className="card-body">
        {/* <!-- Title --> */}
        <h4 className="card-title">
          <a>
            Patient Name: <span></span>
            {patient.name}
          </a>
        </h4>
        {/* <!-- Text --> */}
        <p className="card-text">
          <h6>Registration Date:</h6> <span></span>
          {patient.reg_date}
        </p>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {/* <!-- Button --> */}
        <Link to={`/patientdetails/${patient.id}` }className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PatientCard;