import React from 'react';
import QuestionComponent from '../components/QuestionsComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { viewAllCountries } from '../reducers/viewAllCountry';
import { questionPost } from '../reducers/questionsCorona';

class QuestionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"",
            flag:0,
            totalval:0,
            diseased:true,
         }
    }
    componentDidMount(){
        // this.props.viewAllCountries();
        console.log('country',this.props.country);
    }
    handleSubmit = (values) => {
        console.log('inside handle submit');
        const total = parseInt(values.fever)+parseInt(values.cough)+parseInt(values.cold)+parseInt(values.lossOfSmell)+parseInt(values.lossOfTaste);
        const name = values.name;
        const country = values.country;
        this.setState({
            flag:1,
            totalval:total
        })
        console.log('inside handle submit2');        
        if(total>2){
                    this.setState({
                        
                        diseased:true
                    })
                } else{
                    
                    this.setState({
                        
                        diseased:false
                    })
                }
                // alert(JSON.stringify(this.state.msg));

                    this.props.questionPost(name,country,total,this.state.diseased);
                    console.log("inside on submit container", this.props.coronamsg);
    }
    okClick = () => {
        this.props.history.push("/home");
        this.setState({
            msg:"",
            flag:0
        });
        
    }
    render() { 
        console.log(this.props.country,'props.country')
        return ( 
            
            <QuestionComponent flag={this.state.flag} msg={this.props.coronamsg} totalval = {this.state.totalval} handleSubmit={this.handleSubmit} okClick = {this.okClick}/>
            
             
            );
    }
}
const mapStateToProps = state => ({
    country : state && state.viewAllCountry && state.viewAllCountry.country && state.viewAllCountry.country.length>0 ? state.viewAllCountry.country : "no countries to display",
    coronamsg: state && state.questionCorona && state.questionCorona.coronamsg && state.questionCorona.coronamsg.coronamsg
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        viewAllCountries,
        questionPost
    },
    dispatch
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionsContainer)