import React, { Component } from 'react';
import { connect } from 'react-redux';

export default RequireAuth => {
  class ComposeComponent extends Component {
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

      if (!uid) {
        history.push('/signin');
      }
    };

    render() {
      return <RequireAuth {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.firebase.auth
  });

  return connect(mapStateToProps)(ComposeComponent);
};
