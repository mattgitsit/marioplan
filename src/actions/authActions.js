export const signIn = (credentials, history) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);

    dispatch({
      type: 'LOGIN_SUCCESS'
    });

    history.push('/');
  } catch (err) {
    dispatch({
      type: 'LOGIN_ERROR',
      payload: err
    });
  }
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  await firebase.auth().signOut();

  dispatch({
    type: 'SIGNOUT_SUCCESS'
  });
};
