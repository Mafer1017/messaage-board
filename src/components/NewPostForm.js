import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    const DateDisplay = ({ date }) => <p>{date.toString()}</p>;
    console.log(event.target.timeCreated.value);
    props.onNewPostCreation({
      post: event.target.post.value,
      title: event.target.title.value,
      timeCreated: event.target.timeCreated.value,
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