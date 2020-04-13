import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Login from './components/login';
import SignUp from './components/signUp';
import Main from './components/main';
import reducer from './reducer';

const App = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Router>
        {/* <Route path="/" component={Main} exact /> */}
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </Router>
    </Provider>
  );
};

export default App;
