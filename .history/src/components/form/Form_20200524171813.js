import React from "react";


const Form = ({ handleOnInputChange, query }) => {


    return (

        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                    <i className="fa fa-search prefix"></i>
                </span>
            </div>
            <input
                className="form-control"
                type="text"
                placeholder="Beer name"
                value={query}
                onChange={event => handleOnInputChange(event)}
            />
        </div>

    );

};

export default Form;
