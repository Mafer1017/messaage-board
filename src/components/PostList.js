import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";


function PostList(props){
  for (const [key, value] of Object.entries(props.postList)){
    console.log(`${key}:${value}`);
  };
  let newProps = [props.postList];
  newProps.sort((a, b)=> {return b.counter - a.counter});

  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => (
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
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};


export default PostList;