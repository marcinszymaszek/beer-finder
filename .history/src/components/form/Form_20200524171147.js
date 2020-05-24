import React from "react";


const Form = ({ }) => {


    return (

        <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon">
            <i className="fa fa-user prefix"></i>
          </span>
        </div>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
      </div>

    );

};

export default Form;
