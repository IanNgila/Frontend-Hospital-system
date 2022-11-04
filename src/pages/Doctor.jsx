import React, { useState, useEffect } from "react";
import PatientCard from "../components/PatientCard";
import TablePatient from "../components/TablePatient";

const Doctor = () => {
  const [patients, setPatients] = useState([]);

  // const getPatients = async () => {
  //   const res = await fetch("/patients");
  //   const data = await res.json();
  //   setPatients(data);
  //   console.log(patients);
  // };
  useEffect(() => {
    const getPatients = async () => {
      const res = await fetch("/patients");
      const data = await res.json();
      console.log(data);
      setPatients(data);
    };
    getPatients();
  }, []);

  return (
    // <TablePatient patients={patients}/>

    <div class="row">
      {/* <!-- Card --> */}
      {patients.map((patient) => {
        return (
          <>
            <div class="col-md-4">
              <PatientCard  patient={patient} />
            </div>
          </>
        );
      })}
      {/* <!-- Card --  >
       */}
      {/* <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4">.col-md-4</div> */}
    </div>
  );
};

export default Doctor;
