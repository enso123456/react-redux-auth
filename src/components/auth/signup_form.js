import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"
import InputField from "./input_field"

class SignoutForm extends Component {
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
              component={InputField}
              type="text"
              placeholder="Email"
            />
          </div>
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <div>
            <Field
              name="password"
              component={InputField}
              type="password"
              placeholder="Password"
            />
          </div>
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password: </label>
          <div>
            <Field
              name="passwordConfirm"
              component={InputField}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </fieldset>
        {this.renderAlert()}
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.email) {
    errors.email = "Please enter an email"
  }

  if (!values.password) {
    errors.password = "Please enter an password"
  }

  if (!values.password) {
    errors.passwordConfirm = "Please enter a password confirmation"
  }

  if (values.password !== values.passwordConfirm) {
    errors.password = "Password must match"
  }

  return errors
}
// first config the component
export default reduxForm({
  form: "signout",
  validate
})(SignoutForm)
