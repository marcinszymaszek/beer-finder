import React from "react";
import './Form.css';

const Form = ({ handleOnInputChange, query }) => {


    return (

        <div className="input-group" id="beer-form-input">
            <form>            <div className="input-group-prepend">
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
            </form>
        </div>

    );

};

export default Form;
