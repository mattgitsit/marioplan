export const createProject = project => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  try {
    await firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Matt',
      authorLastName: 'Ondevilla',
      authorId: 123456,
      createdAt: new Date()
    });

    dispatch({
      type: 'CREATE_PROJECT',
      payload: project
    });
  } catch (err) {
    dispatch({
      type: 'CREATE_PROJECT_ERROR',
      payload: err
    });
  }
};
