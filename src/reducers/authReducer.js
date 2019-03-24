const initState = {
  authError: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.payload
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.payload
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_SUCCESS':
      return state;
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};
