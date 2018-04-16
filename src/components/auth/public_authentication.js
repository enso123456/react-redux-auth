import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class PublicAuthentication extends Component {
    //use the react context
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (this.props.authenticated) {
        this.context.router.push("/feature");
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.authenticated) {
        this.context.router.push("/feature");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { authenticated: state.auth.authenticated };
  };
  return connect(mapStateToProps)(PublicAuthentication);
}
