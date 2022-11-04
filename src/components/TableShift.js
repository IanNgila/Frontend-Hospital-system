import React from "react";
import { useParams } from "react-router-dom";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import {CiEdit} from 'react-icons/ci'
import {RiDeleteBin6Fill} from 'react-icons/ri'

const Tableshift = ({ shifts }) => {
  const { id } = useParams();
  const handleDelete = () => {
    console.log(id)
    fetch(`https://mighty-fjord-86271.herokuapp.com/shifts/${id}`, {
      // mode: 'no-cors',
      method: "DELETE",
    }).then(() => {
      console.log(id);
    });
  };


  return (
    <MDBTable >
      <MDBTableHead>
        <tr className="table-dark">
          <th scope="col">Name</th>
          <th scope="col">Job Description</th>
          <th scope="col">Contact </th>
          <th scope="col">Email</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Time</th>
          <th scope="col">Status</th>
          <th scope="col" colSpan={2}>
            Action
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {shifts.map((shift) => {
          return (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{shift.Name}</p>
                    <p className="text-muted mb-0"></p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{shift.Job_description}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{shift.Contact}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{shift.Email}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{shift.Start_time}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <p className="fw-normal mb-1">{shift.End_time}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              
              <td>
                <p className="fw-normal mb-1">{shift.Status}</p>
                {/* <p className="text-muted mb-0">IT department</p> */}
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm" onClick={handleDelete}>
                  <CiEdit />
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  <RiDeleteBin6Fill />
                </MDBBtn>
              </td>
            </tr>
          );
        })}
        {/* <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Alex Ray</p>
                <p className="text-muted mb-0">alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Consultant</p>
            <p className="text-muted mb-0">Finance</p>
          </td>
          <td>
            <MDBBadge color="primary" pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr> */}
        {/* <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Kate Hunington</p>
                <p className="text-muted mb-0">kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Designer</p>
            <p className="text-muted mb-0">UI/UX</p>
          </td>
          <td>
            <MDBBadge color="warning" pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr> */}
      </MDBTableBody>
    </MDBTable>
  );
};
export default Tableshift;
