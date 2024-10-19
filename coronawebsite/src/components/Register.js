import React from 'react';
import {Formik,Field, Form} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import Select from 'react-select';
import Background from '../pngtree-blue-gradient-color-corona-virus-creative-background-image_332733.jpg'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            country:[]
         }
    }
    componentDidMount(){
        try{

            axios.get(`https://api.covid19api.com/countries`).then((response)=>{

                    this.setState({
                        country:response.data
                    });
                                    
                
            });
        } catch(e){

            console.log(e);
        }

    }

    render() {
        
        const displayCountries = this.state.country.map((count)=>{
            const countryObject = {};
            countryObject.label = count.Country;
            countryObject.value = count.Slug
            return countryObject;
        });
        const mystyle = {
          color: "black",
          backgroundColor: "white",
          // backgroundImage: `url(${Background})`,
          padding: "14.75%",
          fontFamily: "Arial",
          backgroundSize:"cover",
          
        };
        console.log('displaycountries',displayCountries); 
        return ( 
          
            <div style = {mystyle}>
            <h1>Check Your Country</h1>
            <div className = "row">
            <div className = "col-4"></div>
            <div className = "col-4">
            
            <Formik
            initialValues = {{
                name:'',
                country:''
            }}
            validationSchema = {Yup.object().shape({
                name:Yup.string().min(3,'3 characters required').max(10,'10 characters required').required('Required'),
                country:Yup.string().required('Required').nullable()
            })}
            onSubmit = {(values) => {
                window.localStorage.setItem('name',values.name);
                window.localStorage.setItem('country',values.country);
                
                this.props.history.push("/display");
            }}
            >
            {({ touched, errors, isSubmitting, handleChange }) => (
              
                <Form>
                  <div className="form-group" style={{textAlign:"left"}}>
                    <label htmlFor="Name">Name</label>
                    <Field
                      type="Text"
                      name="name"
                      onChange={handleChange("name")}
                      placeholder="Enter name"
                      className={`form-control ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                    />
                    {errors.name}
                  </div>

                  <div className="form-group" style={{textAlign:"left"}}>
                    <label htmlFor="country">Country</label>
                    <Select 
                    name = "country"
                    onChange = {selectedOption => {
                        handleChange("country")(selectedOption.value);
                      }}
                    options = {displayCountries}
                    className={`${
                        errors.country ? "is-invalid" : ""
                      }`}
                      />
                      {touched.country && errors.country ? <div className="error" style = {{color:"red"}}> {errors.country}</div>: null }
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </Form>
              )}            
              </Formik>


            </div>
            <div className = "col-4"></div>
            
              </div>
            
            </div>
             
            );
    }
}
 
export default Register;