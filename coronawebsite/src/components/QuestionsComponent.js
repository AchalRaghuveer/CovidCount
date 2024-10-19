import React from 'react';
import {Formik,Field, Form} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { viewAllCountries } from '../reducers/viewAllCountry'
import Background from '../pngtree-bacterial-virus-corona-or-covid19-png-image_5330490.jpg';
import "./QuestionsComponent.css";


class QuestionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            country:""
         }
    }
    componentDidMount(){
        this.props.viewAllCountries();
        console.log('country',this.props.country);
    }
   
    render() { 
        const validationSchemas = Yup.object().shape({
          name:Yup.string().min(3,'3 characters required').max(10,'10 characters required').required('Required'),
          country:Yup.string().required('Required'),
          fever:Yup.string().required('Required'),
          cough:Yup.string().required('Required'),
          cold:Yup.string().required('Required'),
          lossOfSmell:Yup.string().required('Required'),
          lossOfTaste:Yup.string().required('Required'),
      });
        const displayCountries = this.props && this.props.country && this.props.country.length>0 && this.props.country.map((count)=>{
            const countryObject = {};
            countryObject.label = count.Country;
            countryObject.value = count.Slug
            return countryObject;
        });
        const booleanOptions = [
        {label:"yes",value:"1"},
        {label:"no",value:"0"}];
        console.log('displaycountries',displayCountries);
        
        const flag  = this.props.flag; 
        console.log('props in content', flag);
        const mystyle = {
          // color: "black",
          backgroundColor: "white",
          //  backgroundImage: `url(${Background})`,
           padding: "12%",
          // fontFamily: "Arial",
        };
        return ( 
            <div className = "questions" style = {mystyle}>
            <div className = "container">
            <h1>Questions</h1>
            <div className = "row">
            <div className = "col-3"></div>
            <div className = "col-6">
            
            <Formik
                initialValues = {{
                    name:'',
                    country:'',
                    fever:'',
                    cough:'',
                    cold:'',
                    lossOfSmell:'',
                    lossOfTaste:''
                }}
                validationSchema = {validationSchemas}
                onSubmit = {(values, {setSubmitting, resetForm}) => {
                    setSubmitting(false);
                    resetForm();
                    this.props.handleSubmit(values);
                    this.props.history.push("/display");
                }}
                >
                {({ touched, errors, isSubmitting, handleChange, dirty,values, handleReset }) => (
                    <Form>
                      <div className="form-group" style={{textAlign:"left"}}>
                        <label htmlFor="Name">Name</label>
                        <Field
                          type="Text"
                          name="name"
                          onChange={handleChange("name")}
                          placeholder="Enter name"
                          className={`form-control `}
                        />
                        {touched.name && errors.name ? <div className="error" style = {{color:"red"}}> {errors.name}</div>: null}
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
                            touched.country && errors.country ? "is-invalid" : ""
                          }`}
                          />
                          {touched.country && errors.country ? <div className="error" style = {{color:"red"}}> {errors.country}</div>: null } 
                      </div>
    
                      <div className="form-group" style={{textAlign:"left"}}>
                        <label htmlFor="Fever">Do you Have Fever?</label>
                        <Select 
                        name = "fever"
                        onChange = {selectedOption => {
                            handleChange("fever")(selectedOption.value);
                          }}
                        options = {booleanOptions}
                        // className={`${
                        //     touched.fever && errors.fever ? "is-invalid" : ""
                        //   }`}
                          />
                          {touched.fever && errors.fever ? <div className="error" style = {{color:"red"}}> {errors.fever}</div>: null }
                            </div>
                      {values && values.fever && values.fever.length>0 && <div className="form-group" style={{textAlign:"left"}}>
                      <label htmlFor="Cough">Do you Have Cough?</label>
                      <Select 
                      name = "cough"
                      onChange = {selectedOption => {
                          handleChange("cough")(selectedOption.value);
                        }}
                      options = {booleanOptions}
                      className={`${
                          touched.cough && errors.cough ? "is-invalid" : ""
                        }`}
                        />
                        {touched.cough && errors.cough ? <div className="error" style = {{color:"red"}}> {errors.cough}</div>: null }
                                            </div>}
                      
                    {values && values.cough && values.cough.length>0 && <div className="form-group" style={{textAlign:"left"}}>
                    <label htmlFor="Cold">Do you Have Cold?</label>
                    <Select 
                    name = "cold"
                    onChange = {selectedOption => {
                        handleChange("cold")(selectedOption.value);
                      }}
                    options = {booleanOptions}
                    className={`${
                        touched.cold && errors.cold ? "is-invalid" : ""
                      }`}
                      />
                      {touched.cold && errors.cold ? <div className="error" style = {{color:"red"}}> {errors.cold}</div>: null }
                  </div>
                    }
                    {values && values.cold && values.cold.length>0 && <div className="form-group" style={{textAlign:"left"}}>
                    <label htmlFor="LossOfTaste">Do you Have Loss of Taste?</label>
                    <Select 
                    name = "lossOfTaste"
                    onChange = {selectedOption => {
                        handleChange("lossOfTaste")(selectedOption.value);
                      }}
                    options = {booleanOptions}
                    className={`${
                        touched.lossOfTaste && errors.lossOfTaste ? "is-invalid" : ""
                      }`}
                      />
                      {touched.lossOfTaste && errors.lossOfTaste ? <div className="error" style = {{color:"red"}}> {errors.lossOfTaste}</div>: null }
                  </div>
                    }
                    {values && values.lossOfTaste && values.lossOfTaste.length>0 && <div className="form-group" style={{textAlign:"left"}}>
                    <label htmlFor="LossOfSmell">Do you Have Loss of Smell?</label>
                    <Select 
                    name = "lossOfSmell"
                    onChange = {selectedOption => {
                        handleChange("lossOfSmell")(selectedOption.value);
                      }}
                    options = {booleanOptions}
                    className={`${
                        touched.lossOfSmell && errors.lossOfSmell ? "is-invalid" : ""
                      }`}
                      />
                      {touched.lossOfSmell && errors.lossOfSmell ? <div className="error" style = {{color:"red"}}> {errors.lossOfSmell}</div>: null }
                  </div>
                    } 
                  
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
            <div className = "col-3"></div>
            </div>
                
            
                {this.props && this.props.flag && this.props.flag === 1 ? 
                  <div>
                  {this.props && this.props.totalval && this.props.totalval > 2 ?
                    <div className="popup">
                    <div className="popup_inner">
                      <h3 style = {{color:"red"}}>{this.props.msg}</h3>
                      <button className="btn btn-danger btn-block" onClick={this.props.okClick}>OK</button>
                    </div>
                  </div> : 
                  <div className="popup">
                  <div className="popup_inner">
                    <h3 style = {{color:"green"}}>{this.props.msg}</h3>
                    <button className="btn btn-success btn-block" onClick={this.props.okClick}>OK</button>
                  </div>
                </div>
                  }
                  
                  </div>
                  
                : ""
                }
            </div>
            
            </div> );
    }
}  

const mapStateToProps = state => ({
    country : state && state.viewAllCountry && state.viewAllCountry.country && state.viewAllCountry.country.length>0 ? state.viewAllCountry.country : []
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        viewAllCountries,
    },
    dispatch
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionComponent)
