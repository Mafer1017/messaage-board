import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    const now = new Date();
    console.log(now);
    props.onNewPostCreation({
      post: event.target.post.value,
      title: event.target.title.value,
      // timeCreated: now.toString(),
      timeCreated: now.toISOString().split('T')[0],
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Submit New Post!" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;