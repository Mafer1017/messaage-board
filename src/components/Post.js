import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.post} - {props.title}</h3>
        <p>{props.timeCreated}</p>
        <h3> Total Votes: {props.counter} </h3>
      </div>
    </React.Fragment>
  );
}
Post.propTypes = {
  counter: PropTypes.number,
  post: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  timeCreated: PropTypes.string
};

export default Post;