import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment'; 

class LegalStatus extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_LEGAL', payload: searchObject.id });
    }

      // if date is now, will display empty <p> instead of "Invalid Date" on DOM 
      checkDate = (property) => {
        if(property === null) {
        property = ''
        return property; 
        } else {
            property =  moment(property).subtract(10, 'days').calendar();
            return property; 
        }
    }

    render() {

        // render labels with empty information if reducer is empty
        let emptyStatus; 
        if(this.props.reduxState.legalReducer.length === 0) {
            emptyStatus = <div className="bioCard">
                            <hr/>
                            <label>LAST COURT DATE:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>LAST COURT DATE OUTCOME:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>NEXT COURT DATE:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>NEXT COURT DATE TOPIC:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>ASYLUM APPLICATION:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>WORK AUTH APPLICATION:</label>
                            <p className="PCard"></p>
                            <hr/>
                        </div>
                    }

        return (
            <div>
             <Nav pageName='LEGAL STATUS' volunteer home='/home' /> 
                <center>
                    <div>
                    {emptyStatus}
                    {this.props.reduxState.legalReducer.map((legal,index) =>
                        <div className="bioCard" key={index}>
                            <hr/>
                            <label>LAST COURT DATE:</label>
                            <p className="PCard"> {this.checkDate(legal.last_court_date)}</p>
                            <hr/>
                            <label>LAST COURT DATE OUTCOME:</label>
                            <p className="PCard"> {legal.last_court_date_outcome}</p>
                            <hr/>
                            <label>NEXT COURT DATE:</label>
                            <p className="PCard"> {this.checkDate(legal.next_court_date)}</p>
                            <hr/>
                            <label>NEXT COURT DATE TOPIC:</label>
                            <p className="PCard"> {legal.next_court_date_outcome}</p>
                            <hr/>
                            <label>ASYLUM APPLICATION:</label>
                            <p className="PCard"> {String(legal.asylum_application)}</p>
                            <hr/>
                            <label>WORK AUTH APPLICATION:</label>
                            <p className="PCard"> {String(legal.work_authorization)}</p>
                            <hr/>
                        </div>
                    )}
                    </div>

                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalStatus);