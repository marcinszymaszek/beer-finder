import React from "react";


const Form = ({ }) => {


    return (

        <div className="input-group">
        <div className="input-group-prepend">
          <span>
            <i className="fa fa-search prefix"></i>
          </span>
        </div>
        <input type="text" className="form-control" placeholder="Beer name" />
      </div>

    );

};

export default Form;
