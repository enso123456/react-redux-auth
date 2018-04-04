import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"
import InputField from "./input_field"

class SigninForm extends Component {
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops! </strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    // helper from reduxForm
    const {handleSubmit, onSubmit} = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-group">
          <label>Email: </label>
          <div>
            <Field
              name="email"
              component={props => <InputField {...props} />}
              type="text"
              placeholder="Email"
            />
          </div>
        </fieldset>
        <fieldset className="form-group">
          <label>password: </label>
          <div>
            <Field
              name="password"
              component={props => <InputField {...props} />}
              type="password"
              placeholder="Password"
            />
          </div>
        </fieldset>
        {this.renderAlert()}
        <button className="btn btn-primary" type="submit">
          Sign in
        </button>
      </form>
    )
  }
}

// first config the component
export default reduxForm({
  form: "signin"
})(SigninForm)
