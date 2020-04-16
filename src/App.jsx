import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import Login from './components/login';
import SignUp from './components/signUp';
import Main from './components/main';
import reducer from './reducer';

const App = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));
  // const store = createStore(reducer, applyMiddleware(thunk));
  const customHistory = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={Main} exact history={customHistory} />
        <Route path="/Login" component={Login} history={customHistory} />
        <Route path="/SignUp" component={SignUp} />
      </Router>
    </Provider>
  );
};

export default App;
