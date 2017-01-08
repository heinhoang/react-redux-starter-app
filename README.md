# React Redux Starter App
===============
Using React + Redux and Star Wars API to display characters and information about them.

## Requirements
- reactjs + redux for JS components
- webpack-dev-server for server running
- webpack to bundle up

## Understanding Redux Architecture
```
// a store is an object with an initialState (state to store data) and a method called reducer to manipulate data in state.
const store = createStore(reducer, initialState);

// a reducer receive schema of actions from action and manipulate data in state
const reducer = (state, action) => {
  switch (action.type) {
      case TYPE1
      // ...
  }
  return state;
}

// action is a schema of types of actions you want to manipulate data in state
const actionTypes = {
  TYPE1: 'heyReducerDoThis',
}

const myAction = {type: actionTypes.TYPE1}; // this is an action

// dispatch will transfer action schema to reducer, reducer manipulate data in state
store.dispatch(myAction)
```

## Usage
1) install the dependencies.

```
npm install
```

2) To build and serve the project locally, run:

```
npm run serve
```

3) To just build the project, run:

```
npm run build
```
