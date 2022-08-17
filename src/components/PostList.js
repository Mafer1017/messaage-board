import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";


function PostList(props){
  return (
    <React.Fragment>
      {props.postList.map((post) => (
          <Post
            whenPostClicked = { props.onPostSelection }
            post={post.post}
            title={post.title}
            timeCreated={post.timeCreated}
            counter={post.counter}
            id={post.id}
            key={post.id}/>
        ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
};


export default PostList;