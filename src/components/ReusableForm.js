import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='post'
          placeholder='Paste link here' />
        <input
          type='text'
          name='name'
          placeholder='Your Name' />
        <textarea
          name='issue'
          placeholder='wassup.' />
        <input 
          type="date"
          name='timeCreated'> 
        </input>
        <button type='submit'>{props.buttonText}</button>
        
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;