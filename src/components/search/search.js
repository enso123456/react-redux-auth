import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../../actions";

class Search extends Component {
  state = {
    input: "",
    data: {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.result
    });
  }

  onSearch = () => {
    if (this.state.input) {
      setTimeout(() => {
        this.props.getMobileInfo(this.state.input);
      }, 2000);
    }
  };

  render() {
    return (
      <div className="col-md-6">
        <div className={"form-group row"}>
          <label className={"col-sm-3 col-form-label"}>Mobile No.</label>
          <div className={"col-sm-9"}>
            <input
              type="text"
              className={"form-control"}
              placeholder={"Mobile Number"}
              onChange={e => this.setState({ input: e.target.value })}
            />
          </div>
        </div>
        <button
          className={"btn btn-success pull-right"}
          onClick={this.onSearch}
        >
          Search
        </button>

        {this.state.data && JSON.stringify(this.state.data)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.search
  };
}

export default connect(mapStateToProps, Actions)(Search);
