import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";


function PostList(props){
  let newProps = props.postList;
  let sortedObject = {}
  sortedObject = Object.keys(newProps).sort((a, b) => {
                        return newProps[b].counter - newProps[a].counter 
                    }).reduce((prev, curr, i) => {
                        prev[i] = newProps[curr]
                        return prev
                    }, {});  
  return (
    <React.Fragment>
      {Object.values(sortedObject).map((post) => (
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