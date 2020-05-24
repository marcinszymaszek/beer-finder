import React from "react";


const Form = ({ }) => {


    return (

        <>
            <form>
                <div class="input-group">
                    <input id="beer" type="text" class="form-control" name="beer" placeholder="Beer name"/>
                        <span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
                </div>
            </form>
        </>

    );

};

export default Form;
