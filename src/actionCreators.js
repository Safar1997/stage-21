/* eslint-disable no-console */
import axios from 'axios';

export const logInAction = (email, password) => ({ type: 'LOGIN', profile: { email, password } });

export const signUpAction = ({ username, email, password }) => (
  { type: 'SIGNUP', profile: { username, email, password } }
);

export const logOutAction = () => ({ type: 'LOGOUT' });

export const signUp = ({ username, email, password }) => (dispatch) => {
  axios.post('https://conduit.productionready.io/api/users', {
    user: {
      username,
      email,
      password,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(signUpAction({ username, email, password }));
      }
      alert('Вы успешно зарегестрировались!');
      console.log(res);
      console.log(username, email, password);
    })
    .catch((err) => {
      alert('This user is already exsist');
      console.log(err.response);
    });
};

export const logIn = ({ email, password }) => () => axios
  .post('https://conduit.productionready.io/api/users/login', {
    user: {
      email,
      password,
    },
  });
