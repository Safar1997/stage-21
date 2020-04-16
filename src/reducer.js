const reducer = (state = { loged: false }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.profile, loged: true };
    case 'SIGNUP':
      return { ...state, ...action.profile };
    case 'LOGOUT':
      return { ...state, loged: false };
    default:
      return state;
  }
};

export default reducer;
