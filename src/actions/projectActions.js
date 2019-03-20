export const createProject = project => dispatch => {
  dispatch({
    type: 'CREATE_PROJECT',
    payload: project
  });
};
