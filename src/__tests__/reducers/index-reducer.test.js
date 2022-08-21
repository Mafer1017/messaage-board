import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainPostList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_POST action works for postListReducer and rootReducer', ()=> {
    const action = {
      type: 'ADD_POST',
      title: 'Home Depot Blues',
      post: 'Tim the tool man taylor',
      counter: 5,
      timeCreated: '9-16-1998',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', ()=> {
    const action ={
      type: "TOGGLE_FORM"
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined,action));
  });

});