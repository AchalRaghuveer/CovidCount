import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';    
import { viewAllCountries } from '../reducers/viewAllCountry';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';
import Background from '../coronavirus-background-vector-seamless-pattern-covid-virus-sign-light-gray-long-backdrop-banners-176129893.jpg'
import "./coronaviewComponent.css";

class CaronaView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryDetails: [],
            loading: false
            }
            this.options = {
                defaultSortName: 'name',
                defaultSortOrder: 'desc' 
              };
    }
    

    componentDidMount(){

        try{

            axios.get(`https://api.covid19api.com/summary`).then((response)=>{
                console.log(response.data.Global);
                this.setState({
                    totalData: response.data,
                    countryDetails: response.data.Countries,
                    global: response.data.Global,
                    loading: true
                });
                console.log(this.state.countryDetails);
            });
        } catch(e){

            console.log(e);
        }

        
    }

    


    render() { 
        const countryList = this.state.countryDetails;
        const columns = [
            {  
            dataField: "Country",  
            text: "Country",
            sort: true  
            },{  
            dataField: 'NewConfirmed',  
            text: 'NewConfirmed',
            sort: true  
            },{  
            dataField: 'TotalConfirmed',  
                        text: 'TotalConfirmed',
                        sort: true  
                        },{  
                            dataField: 'NewDeaths',  
                            text: 'NewDeaths',
                            sort: true  
                            },{  
                                dataField: 'TotalDeaths',  
                                text: 'TotalDeaths',
                                sort: true  
                                },{  
                                    dataField: 'NewRecovered',  
                                    text: 'NewRecovered',
                                    sort: true  
                                    },{  
                                        dataField: 'TotalRecovered',  
                                        text: 'TotalRecovered',
                                        sort: true  
                                        }
                                        ];
        console.log(columns);
        const defaultSorted = [
            // { dataField: "country", order: "asc" },
            { dataField: "TotalConfirmed", order: "desc" },
            // { dataField: "TotalDeaths", order: "desc" },
            // { dataField: "TotalRecovered", order: "desc" },
            // { dataField: "NewConfirmed", order: "desc" }
          ];
          const mystyle = {
            // color: "Black",
            backgroundColor: "white",
            // backgroundImage: `url(${Background})`,
            // padding: "5%",
            // fontFamily: "Arial",
            // backgroundSize:"cover"
          };
         return (  
            <div className="viewComp" style={mystyle}>
            <div className="container">
            <div className="row"></div>
            <div style = {{marginTop:"5%"}}>
            <h1>Corona Live Count</h1>
            <div className="row" ></div>
            <div>

            {this.state.loading ? 
                <BootstrapTable
                keyField="TotalConfirmed"
                data={countryList}
                // options={this.options}
                columns={columns}
                defaultSorted={defaultSorted}
                pagination={PaginationFactory()}
                /> : <ReactBootstrap.Spinner animation = "border"/> }
            
            </div>
            </div>
            

            </div>
            
            
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      viewAllCountries
    },
    dispatch
  );
 
  export default (
    connect(
      mapDispatchToProps
    )(CaronaView)
  );