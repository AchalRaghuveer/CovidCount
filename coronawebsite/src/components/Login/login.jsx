import React, {Component} from 'react';
import {Formik,Field, Form} from 'formik';
import * as Yup from 'yup';
import Logo from '../../images (1).jpeg';
import './login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            
            <div className = "container">
            <div className = "row align-items-center">
            <div className = "col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">
            <div className="">
            <img src={Logo} alt="..." className="img-fluid"/>
          </div>
            </div>
            <div className = "col-12 col-md-5 col-xl-4 order-md-1 my-5">
            <div className = "container">
            <h3 className="text-center mb-3 display-4">
            Sign in
          </h3>
          
          
          <p className="text-muted text-center mb-5">
            Free access to our dashboard.
          </p>
          <Formik
          initialValues = {{
            userName:'',
            password:''
        }}
        validationSchema = {Yup.object().shape({
            userName:Yup.string().required(),
            password:Yup.string()
        })}
        onSubmit = {(values) => {
            console.log('userName',values.userName);
            console.log('password',values.password);
            
        }}
        >
        {({ errors, isSubmitting, handleChange }) => (
            <Form>
            {errors && errors.userName && <div className="alert alert-danger" style={{textAlign:"left", backgroundColor:"red", color:"white"}} role="alert">
            <p>Your username and password didn't match. Please try again.</p>
        </div> }
            <div className="form-group" style={{textAlign:"left"}}>
                    <label htmlFor="Username">Username</label>
                    <Field
                      type="Text"
                      name="userName"
                      onChange={handleChange("userName")}
                      placeholder="Enter your Username"
                      className={`form-control ${
                        errors.userName ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  <div className="form-group">
                  <div className = "row">
                  <div className = "col-6" style={{textAlign:"left"}}>
                  <label htmlFor="Password">Password</label>
                  </div>
                  <div className="col-6">
                  <a href="https://qats.qcri.org/users/emailus" className="form-text small text-muted">
                    Forgot password?
                  </a>

                </div>
                  </div>
                    
                    <div className="input-group-append">
                    <Field
                      type="password"
                      name="password"
                      onChange={handleChange("password")}
                      placeholder="Enter your password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      
                      />
                    <span className="input-group-text">
                    
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                    
                  
                  </div>
                  <div className="form-group">    
                <button
                    type="submit"
                    className="btn btn-lg btn-block btn-primary mb-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sign in" : "Sign in"}
                  </button>
                  </div>
                  <div className="text-center">
              <small className="text-muted text-center">
                Don't have an account yet? <a href="/users/signup">Sign up</a>.
              </small>
            </div>
            </Form>
        )}
          </Formik>
            </div>
          
            </div>
            </div>
            
            </div>
            
         );
    }
}
 
export default Login;