import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.type} - {props.post}</h3>
        <p><em>{props.title}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}
Post.propTypes = {
  type: PropTypes.string,
  post: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
  timeCreated: PropTypes.instanceOf(Date)
};

export default Post;