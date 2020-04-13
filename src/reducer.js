const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.profile, loged: true };
    case 'SIGNUP':
      return { ...state, ...action.profile, loged: true };
    case 'LOGOUT':
      return { ...state, loged: false };
    default:
      return state;
  }
};

export default reducer;
