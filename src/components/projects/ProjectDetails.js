import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = ({ match, project }) => {
  if (project) {
    return (
      <div className="project-details container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>18th March, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container center">Loading...</div>;
  }
};

const mapStateToProps = (state, ownProps) => ({
  project: state.firestore.data.projects
    ? state.firestore.data.projects[ownProps.match.params.id]
    : null
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
