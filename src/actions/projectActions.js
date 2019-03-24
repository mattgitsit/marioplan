export const createProject = (project, history) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const { profile } = getState().firebase;
  const { uid: authorId } = getState().firebase.auth;

  try {
    await firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date()
    });

    dispatch({
      type: 'CREATE_PROJECT',
      payload: project
    });

    history.push('/');
  } catch (err) {
    dispatch({
      type: 'CREATE_PROJECT_ERROR',
      payload: err
    });
  }
};
