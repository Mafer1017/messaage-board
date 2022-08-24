import { connect } from 'react-redux';
import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import PropTypes from "prop-types";


class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // mainPostList: [],
      selectedPost: null,
      editing: false
    };
    
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, title, post, counter, timeCreated } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      post: post,
      counter: counter,
      timeCreated: timeCreated,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
    // this.setState({formVisibleOnPage: false });
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }
  
  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    // const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      // mainPostList: newMainPostList,
      selectedPost: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, title, post, counter, timeCreated } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      post: post,
      counter: counter,
      timeCreated: timeCreated,
    }
    dispatch(action);
    // const editedMainPostList = this.state.mainPostList
    //   .filter(post => post.id !== this.state.selectedPost.id)
    //   .concat(postToEdit);
    this.setState({
        // mainPostList: editedMainPostList,
        editing: false,
        selectedPost: null
    });
  }


  handleCounterDecreasePost = (id) => {
    const { dispatch } = this.props;
    // const { counter } = id;
    const action = {
      type: 'DOWNVOTE_POST',
      id: id
    }
    dispatch(action);
    this.setState({
      // selectedPost: null
    });
  };

  handleCounterIncreasePost = (id) => {
    const { dispatch } = this.props;
    // const { counter } = id;
    const action = {
      type: 'UPVOTE_POST',
      id: id
    }
    dispatch(action);
    this.setState({
      // selectedPost: null
    });
  };


  // handleCounterDecreasePost = (id) => {
  //   const selectedPost = this.props.mainPostList[id];
  //   selectedPost.counter -= 1;
  //   this.setState({selectedPost: selectedPost})
    
  //   const editedMainPostList = this.state.mainPostList
  //     .filter((post) => post.id !== id)
  //     .concat(selectedPost);

  //   this.setState({
  //     mainPostList: editedMainPostList,
  //     editing: false,
  //   });
  // };




  // handleCounterIncreasePost = (id) => {
  //   const selectedPost = this.state.mainPostList.filter(
  //     (post) => post.id === id)[0];
  //     selectedPost.counter += 1;
    
  //   const editedMainPostList = this.state.mainPostList
  //     .filter((post) => post.id !== id)
  //     .concat(selectedPost);

  //   this.setState({
  //     mainPostList: editedMainPostList,
  //     editing: false,
  //   });
  // };


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {
      currentlyVisibleState = <EditPostForm post = {this.state.selectedPost} 
      onEditPost={this.handleEditingPostInList}/>
      buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.state.selectedPost}
      onClickingDelete = {this.handleDeletingPost}
      onClickingEdit = {this.handleEditClick} 
      onClickingDownVote={this.handleCounterDecreasePost}
      onClickingUpVote={this.handleCounterIncreasePost}/>
      buttonText = "Return to Post List";

    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.props.mainPostList} onPostSelection={this.handleChangingSelectedPost} />;
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  console.log(state.mainPostList)
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;