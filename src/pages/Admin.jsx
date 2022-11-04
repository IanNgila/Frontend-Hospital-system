import React, { useState, useEffect } from "react";
import TableShift from "../components/TableShift";

const Admin = () => {
  const [shifts, setShifts] = useState([]);

  const getShifts = async () => {
    const res = await ("https://mighty-fjord-86271.herokuapp.com/staffs");
    const data = await res.json();
    setShifts(data);
    console.log(shifts);
  };

  useEffect(() => {
    getShifts();
  }, []);

  return (
    <>
      <TableShift shifts={shifts}/>

      <div className="mx-auto mt-4">
        {/* <TableShift shifts={shifts} /> */}

        {/* <TableShift /> */}
      </div>
    </>
  );
};

export default Admin;
