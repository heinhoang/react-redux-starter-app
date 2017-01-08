import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './redux';
import { getCharacters } from './redux/characters/actions';

require('./index.html');

// Create redux store
const store = createStore(reducer, compose( // compose function to create a single function from two other functions
  applyMiddleware(thunk), // redux-thunk, which is middleware that will allow us to kick off some asynchronous requests as actions
  window.devToolsExtension ? window.devToolsExtension() : f => f // setup the dev tools extension that can be downloaded into Chrome from the Chrome web store.
));

// Kick off things by getting all characters
store.dispatch(getCharacters());

// Create app
const container = document.querySelector('#app-container');

// Render app
// note: wrap our application in the Provider that will make the store available to all our components.
// note: Provider tag below pass `{store}` to `<App />`, that mean you can use properties of store such as `state`, `dispatch` in App component
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
      , container
    );
  });
}
