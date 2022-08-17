import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete, onClickingEdit, onClickingDownVote, onClickingUpVote } = props;

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <p><em>{post.timeCreated}</em></p>
      <h2>{post.title}</h2>
      <h3>{post.name}</h3>
      <button onClick={()=> onClickingUpVote(post.id) }>▲</button>
      <h3> Total Votes: {post.counter} </h3>
      <button onClick={()=> onClickingDownVote(post.id) }>▼</button>
      <br></br>
      <br></br>
      <button onClick={onClickingEdit}>Update Post</button>
      <button onClick={()=> onClickingDelete(post.id) }>Delete Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDownVote: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;