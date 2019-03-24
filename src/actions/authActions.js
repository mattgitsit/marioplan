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

export const signUp = newUser => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);

    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });

    dispatch({
      type: 'SIGNUP_SUCCESS'
    });
  } catch (err) {
    dispatch({
      type: 'SIGNUP_ERROR',
      payload: err
    });
  }
};
