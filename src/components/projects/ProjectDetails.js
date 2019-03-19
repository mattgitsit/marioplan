import React from 'react';

const ProjectDetails = ({ match }) => {
  return (
    <div className="project-details container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {match.params.id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, cumque alias similique rerum sed voluptas voluptatum
            omnis veniam accusamus cupiditate iusto beatae quaerat eaque
            perferendis sit unde blanditiis, nulla ex amet reprehenderit aut?
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Matt Ondevilla</div>
          <div>18th March, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
