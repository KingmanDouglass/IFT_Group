import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class LegalStatusForm extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        // setting properties to null allow users to post null values into the database
        // which can then be edited later 
        this.setState({
            legalForm:{
                ...this.state.legalForm,
                case_id: searchObject.id,
                last_court_date: null, 
                last_court_date_outcome: null, 
                next_court_date: null, 
                /* this is the topic input field */
                next_court_date_outcome: null, 
                asylum_application: null, 
                work_authorization: null, 
            }
        })  
    }

    state = {
        legalForm: {
            case_id: this.props.reduxState.caseReducer.rows[0].id,
            last_court_date: '',
            last_court_date_outcome: '',
            next_court_date: '', 
            /* this is the topic input field */
            next_court_date_outcome: '', 
            asylum_application: '',
            work_authorization: '',
        }
    }


    next = () => {
        //this.props.history.push('/social-form')
        this.props.history.push(`/admin-landing?id=${this.state.legalForm.case_id}`);
        this.props.dispatch({ type: 'ADD_LEGAL', payload: this.state.legalForm })

    }

     // set state for onChange of textfields 
     handleNameChange = (propertyName) => {  
        return(event) =>{
        this.setState({
            legalForm: {
                ...this.state.legalForm, 
                [propertyName]: event.target.value,
                }
            });
        }    
    }

   


    render() {
        return (
            <div>
                <Nav pageName='LEGAL STATUS FORM' home='/home'/>
                    <center>
                        <div className="formDivs">
                            <label>LAST COURT DATE</label> 
                            <input type="date" value={this.state.legalForm.last_court_date || ''} 
                            onChange={this.handleNameChange('last_court_date')} />

                            <label>OUTCOME</label> 
                            <input type="text" 
                            value={this.state.legalForm.last_court_date_outcome || ''}
                            onChange={this.handleNameChange('last_court_date_outcome')}
                            /> 

                            <label>NEXT COURT DATE</label> 
                            <input type="date" value={this.state.legalForm.next_court_date || ''} 
                            onChange={this.handleNameChange('next_court_date')} />

                            <label>TOPIC</label> 
                            <input type="text"
                            value={this.state.legalForm.next_court_date_outcome || ''}
                            onChange={this.handleNameChange('next_court_date_outcome')}
                            /> 

                            <label>ASYLUM APPLIED FOR</label> 
                            <input type="text" 
                            placeholder="type true or false"
                            value={this.state.legalForm.asylum_application || ''}
                            onChange={this.handleNameChange('asylum_application')}
                            /> 

                            <label>WORK AUTH</label> 
                            <input type="text" 
                            placeholder="type true or false"
                            value={this.state.legalForm.work_authorization || ''}
                            onChange={this.handleNameChange('work_authorization')}
                            /> 
    
                            <button
                            className="formButton"
                            onClick={this.next}
                            >COMPLETE CASE</button>
                        </div>
                    </center>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(LegalStatusForm));