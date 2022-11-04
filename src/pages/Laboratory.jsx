import React from "react";

const Laboratory = () => {
  return (
    <>
      <form>
        <fieldset>
          <div className="form-group">
            <label htmlFor="exampleInputTextname" className="form-label mt-4">Test Name</label>
            <input type="textName" className="form-control" id="exampleInputTextname" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputTextname" className="form-label mt-4">Cost Of Test</label>
            <input type="textName" className="form-control" id="exampleInputTextname" />
          </div>


          <div className="form-group">
            <label htmlFor="exampleTextarea" className="form-label mt-4">Description</label>
            <textarea className="form-control" id="exampleTextarea" rows="4"></textarea>
          </div>

          <button type="submit" className="btn btn-success">Create</button>
        </fieldset>
      </form>
    </>
  )
}

export default Laboratory;
