import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.state.selectedPost} />
      buttonText = "Return to Post List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.state.mainPostList} />;
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

export default PostControl;