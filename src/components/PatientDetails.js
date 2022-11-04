import React from "react";
import useFetch from "../customHooks/UseFetch";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const PatientDetails = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const { data: patient, error, loading } = useFetch("/patients/" + id);

  const handlePatientDelete = () => {
    console.log("delete");
    fetch("/patients/" + patient.id, {
      method: "DELETE",
    }).then(() => {
      alert("successfuly deleted");
      navigate("/");
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col col-example">
          <img
            src="https://thumbs.dreamstime.com/b/psychiatric-patient-avatar-character-vector-illustration-design-88377725.jpg"
            alt="image"
            class="img-thumbnail"
          ></img>
        </div>
        <div className="col col-example">
          <ul class="list-group">
            <li class="list-group-item">
              Ticket Numbe<span></span>r{patient.ticket_no}
            </li>
            <li class="list-group-item">
              Registration Date<span></span> {patient.reg_date}
            </li>
            <li class="list-group-item">
              Addresss<span>{patient.address}</span>
            </li>
            <li class="list-group-item">
              Status<span>{patient.patient_status}</span>
            </li>
            {/* <li class="list-group-item">Vestibulum at eros</li> */}
          </ul>
        </div>
        <div className="w-100"></div>
      </div>
      <button
        type="submit"
        class="btn btn-danger"
        onClick={handlePatientDelete}
      >
        Delete Patient
      </button>
    </div>
  );
};
export default PatientDetails;
