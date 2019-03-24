import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newProject = {
      ...this.state
    };

    this.props.createProject(newProject, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              name="content"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createProject }
)(CreateProject);
