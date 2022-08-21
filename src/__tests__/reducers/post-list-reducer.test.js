import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer',()=> {

  const currentState = {
    1: {
      title: 'Home Depot Blues',
      post: 'Tim the tool man taylor',
      counter: 5,
      timeCreated: '9-16-1998',
      id: 1
    }, 2: {
      title: 'Pick Your King',
      post: 'ACAB - pig champion',
      counter: 10,
      timeCreated: '06-66-1312',
      id: 2
    }
  }

  let action;
  const postData ={
    post: "I'm hungry",
    title: "pass the hot dogs",
    counter: 9,
    timeCreated: "8-21-2022",
    id: 3
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { post, title, counter, timeCreated, id } = postData;
    action = {
      type: 'ADD_POST',
      post: post,
      title: title,
      counter: counter,
      timeCreated: timeCreated,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        post: post,
        counter: counter,
        timeCreated: timeCreated,
        id: id
      }
    });

  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: 'Pick Your King',
        post: 'ACAB - pig champion',
        counter: 10,
        timeCreated: '06-66-1312',
        id: 2
        }
    });
  });

  test('should lower the counter score by one', ()=> {
    action = {
      type: 'DOWNVOTE_POST',
      id: 2
    };
    expect(postListReducer(currentState, action)).toEqual({
      1: {
        title: 'Home Depot Blues',
        post: 'Tim the tool man taylor',
        counter: 5,
        timeCreated: '9-16-1998',
        id: 1
      }, 2: {
        title: 'Pick Your King',
        post: 'ACAB - pig champion',
        counter: 9,
        timeCreated: '06-66-1312',
        id: 2
        }
    });
  });
  
  test('should increase the counter score by one', ()=> {
    action = {
      type: 'UPVOTE_POST',
      id: 2
    };
    expect(postListReducer(currentState, action)).toEqual({
      1: {
        title: 'Home Depot Blues',
        post: 'Tim the tool man taylor',
        counter: 5,
        timeCreated: '9-16-1998',
        id: 1
      }, 2: {
        title: 'Pick Your King',
        post: 'ACAB - pig champion',
        counter: 10,
        timeCreated: '06-66-1312',
        id: 2
        }
    });
  });

});