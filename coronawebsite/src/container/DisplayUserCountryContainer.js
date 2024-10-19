import { displayUserCountryReducers } from '../reducers/displayUserCountryReducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import DisplayUserCountry from '../components/displayUserCountry';

class DisplayUserCountryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            name:window.localStorage.getItem('name'),
            country:window.localStorage.getItem('country'),
            countryDetails:[]
        }
    }
    componentDidMount(){
        console.log('inside did mount');
        
        this.props.displayUserCountryReducers(this.state.country);
        console.log('display country',this.props.displayCountry);
        this.setState({
            countryDetails:this.props.displayCountry[this.props.displayCountry.length-1],
        });
    }
    render() { 
        return (  
            <DisplayUserCountry name={this.state.name} countryDetails={this.props.displayCountry}/>
        );
    }
}
 
const mapStateToProps = state => ({
    displayCountry : state && state.displayUserCountryReducer && state.displayUserCountryReducer.countryDet && state.displayUserCountryReducer.countryDet.length>0 && state.displayUserCountryReducer.countryDet[state.displayUserCountryReducer.countryDet.length - 1]
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        displayUserCountryReducers,
    },
    dispatch
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DisplayUserCountryContainer)
