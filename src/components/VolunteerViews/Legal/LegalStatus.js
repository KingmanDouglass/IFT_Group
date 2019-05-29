import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class LegalStatus extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('LEGAL STATUS searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_LEGAL', payload: searchObject.id });
    }
    render() {
        return (
            <div>
             <Nav pageName='LEGAL STATUS' volunteer home='/home' /> 
                <center>
                    <div>{this.props.reduxState.legalReducer.map(legal =>
                <div className="bioCard">
                    <hr/>
                    <label>LAST COURT DATE:</label>
                    <p className="PCard"> {legal.last_court_date}</p>
                    <hr/>
                    <label>LAST COURT DATE OUTCOME:</label>
                    <p className="PCard"> {legal.last_court_date_outcome}</p>
                    <hr/>
                    <label>NEXT COURT DATE:</label>
                    <p className="PCard"> {legal.next_court_date}</p>
                    <hr/>
                    <label>NEXT COURT DATE TOPIC:</label>
                    <p className="PCard"> {legal.next_court_date_outcome}</p>
                    <hr/>
                    <label>ASYLUM APPLICATION:</label>
                    <p className="PCard"> {legal.asylum_application}</p>
                    <hr/>
                    <label>WORK AUTH APPLICATION:</label>
                    <p className="PCard"> {legal.work_authorization}</p>
                    <hr/>
                </div>
)}
</div>


                    {/* <label> LAST COURT DATE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>OUTCOME: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>NEXT COURT DATE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>TOPIC: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>ASYLUM APPLIED FOR: Y/N: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>WORTH AUTHORIZATION Y/N: </label> <br/> 
                    <div className="bioDivs"> </div> <br/>  */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalStatus);