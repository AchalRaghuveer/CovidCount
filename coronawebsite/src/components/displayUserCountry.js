import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../coronavirus-background-vector-seamless-pattern-covid-virus-sign-light-gray-long-backdrop-banners-176129893.jpg'
import './displayUserCountry.css';

const DisplayUserCountry = (props) => {
    console.log('inside component',props);
    const mystyle = {
      color: "black",
      backgroundColor: "white",
      // backgroundImage: `url(${Background})`,
      padding: "5%",
      fontFamily: "Arial",
      backgroundSize:"cover",
      
    };
    return(
      <div style = {mystyle}>
      <div className = "container">
        <h1>Country Statistics</h1>
        
        
        <h3 style={{textAlign:"left"}}>Hello {props.name} the status of Your Country:</h3>
        <div className = "displaybox">
        
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"center"}}>Country</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3>{props && props.countryDetails ? props.countryDetails.Country:'no country'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"center"}}>Total Confirmed Cases</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'orange',textDecoration: 'none'}}>{props && props.countryDetails ? props.countryDetails.Confirmed:'no Confirmed'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"center"}}>Total Deaths</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'red',textDecoration: 'none'}}>{props && props.countryDetails ? props.countryDetails.Deaths:'no Deaths'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"center"}}>Total Recovered</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'green',textDecoration: 'none'}}>{props && props.countryDetails ? props.countryDetails.Recovered:'no Recovered'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"center"}}>Total Active</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'orange',textDecoration: 'none'}}>{props && props.countryDetails ? props.countryDetails.Active:'no Active'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"center"}}>Date</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3>{props && props.countryDetails ? props.countryDetails.Date:'no Date'}</h3>
        </div>
        </div>

        </div>
        
        <Link to="/viewall" style={{color: 'red',textDecoration: 'none'}}><h4>Do you want to view all countries?</h4></Link>
        </div>
      </div>
        
        
    );
};

export default DisplayUserCountry;