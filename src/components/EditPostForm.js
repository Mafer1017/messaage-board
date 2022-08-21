import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPostForm (props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    const now = new Date();
    props.onEditPost({ 
      post: event.target.post.value,
      title: event.target.title.value,
      timeCreated: now.toISOString().split('T')[0],
      counter: post.counter,
      id: post.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
};

export default EditPostForm;