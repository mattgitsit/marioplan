import React, { Component } from 'react';
import { connect } from 'react-redux';

export default IsPublic => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldRedirect();
    }

    componentDidUpdate() {
      this.shouldRedirect();
    }

    shouldRedirect = () => {
      const {
        auth: { uid },
        history
      } = this.props;

      if (uid) {
        history.push('/');
      }
    };

    render() {
      return <IsPublic {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.firebase.auth
  });

  return connect(mapStateToProps)(ComposedComponent);
};
