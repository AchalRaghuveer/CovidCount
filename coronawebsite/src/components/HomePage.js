import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../inline_image_preview_abcd.jpg';
import { viewCount } from '../reducers/displayCount';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { worldCount } from '../reducers/worldCorona';
import './HomePage.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.viewCount();
        this.props.worldCount();
    }
    render() { 
        const mystyle = {
            color: "black",
            backgroundColor: "white",
            // backgroundImage: `url(${Background})`,
            padding: "2%",
            fontFamily: "Arial",
            backgroundSize:"cover"
          };
          console.log('props',this.props.worldCountCorona);
        return ( 
            <div style={mystyle}>
            <div className = "container">
            
            <h1>Corona Virus</h1>
            
            <div className="row" style = {{marginTop:"5%",paddingBottom:"2.5%"}}>
            <div className = "leftbox col-6">
            <h3>About COVID-19</h3>
            <ul style={{textAlign:"left"}}>
            <li><p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
            </p></li>
            <li><p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.</p></li>
            <li><p>Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.</p></li>
            </ul>
            
            <div>
            
            <h3>Questions Statistics</h3>
            <ul style={{textAlign:"left"}}>
            <li><h4 style={{textAlign:"left", color:"orange", textDecoration: 'none'}}>People who took the covid Test today are {this.props.count.totalCount}</h4></li>
            <li><h4 style={{textAlign:"left", color:"green", textDecoration: 'none'}}>People who have no symptoms are {this.props.count.negativeCount}</h4></li>
            <li><h4 style={{textAlign:"left", color:"red", textDecoration: 'none'}}>People who have the symptoms are {this.props.count.positiveCount}</h4></li>
            
            </ul>
            </div>
            

            </div>
            <div className = "rightbox col-6">
            <h3 style={{paddingBottom:"7%"}}>World Corona Statistics</h3>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"left"}}>New Confirmed</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'orange',textDecoration: 'none'}}>{this && this.props && this.props.worldCountCorona ? this.props.worldCountCorona.NewConfirmed:'no Confirmed'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"left"}}>Total Confirmed</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'orange',textDecoration: 'none'}}>{this && this.props && this.props.worldCountCorona ? this.props.worldCountCorona.TotalConfirmed:'no Confirmed'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"left"}}>New Deaths</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'red',textDecoration: 'none'}}>{this && this.props && this.props.worldCountCorona ? this.props.worldCountCorona.NewDeaths:'no Deaths'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"left"}}>Total Deaths</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'red',textDecoration: 'none'}}>{this && this.props && this.props.worldCountCorona ? this.props.worldCountCorona.TotalDeaths:'no Deaths'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"left"}}>New Recovered</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'green',textDecoration: 'none'}}>{this && this.props && this.props.worldCountCorona ? this.props.worldCountCorona.NewRecovered:'no Recovered'}</h3>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-12 col-md-6">
        <h3 style={{textAlign:"left"}}>Total Recovered</h3>
        </div>
          <div className="form-group col-12 col-md-6">
        <h3 style={{color: 'green',textDecoration: 'none'}}>{this && this.props && this.props.worldCountCorona ? this.props.worldCountCorona.TotalRecovered:'no Recovered'}</h3>
        </div>
        </div>
        
            </div>
            </div>
            <div className="row">
            <div className = "col-6">
            <Link to="/viewall" style={{textDecoration: 'none'}}><h3>Do you want to view all countries?</h3></Link>
            </div>
            <div className = "col-6">
            <Link to="/questions" style={{textDecoration: 'none'}}><h3>Do you want to check your health status?</h3></Link>
            </div>
            </div>
            
            </div>
            
            </div>
         );
    }
}
const mapStateToProps = state => ({
    country : state && state.viewAllCountry && state.viewAllCountry.country && state.viewAllCountry.country.length>0 ? state.viewAllCountry.country : [],
    count: state && state.displayCount && state.displayCount.countCorona,
    worldCountCorona: state && state.worldCorona && state.worldCorona.worldCountCorona && state.worldCorona.worldCountCorona.Global
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        viewCount,
        worldCount
    },
    dispatch
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
