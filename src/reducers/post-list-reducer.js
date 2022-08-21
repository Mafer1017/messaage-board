const reducer = (state = {}, action) => {
  const { post, title, counter, timeCreated, id } = action;
  let newState = {...state };
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        post: post,
        counter: counter,
        timeCreated: timeCreated,
        id: id
      }
    });
  case 'DOWNVOTE_POST':
    newState[id].counter -=1;
    return newState;
  case 'UPVOTE_POST':
    newState[id].counter +=1;
    return newState;
  case 'DELETE_POST':
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default reducer; 