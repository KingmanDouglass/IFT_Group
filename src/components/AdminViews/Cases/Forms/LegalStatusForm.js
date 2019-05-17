import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class LegalStatusForm extends Component {

    state = {
        legalForm: {
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
        this.props.history.push('/social-form')
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

    check = () => {
        console.log(this.state);   
    }


    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            LEGAL STATUS FORM
                        </h1>
                    </div>
                    <div className="formDivs">
    <button onClick={this.check}> check state </button>
                        <label>LAST COURT DATE</label> <br/>
                        <input 
                        value={this.state.legalForm.last_court_date}
                        onChange={this.handleNameChange('last_court_date')}
                        type="text" /> <br/>

                        <label>OUTCOME</label> <br/>
                        <input type="text" 
                         value={this.state.legalForm.last_court_date_outcome}
                         onChange={this.handleNameChange('last_court_date_outcome')}
                        /> <br/>

                        <label>NEXT COURT DATE</label> <br/>
                        <input type="text" 
                        value={this.state.legalForm.next_court_date}
                        onChange={this.handleNameChange('next_court_date')}
                        /> <br/>

                        <label>TOPIC</label> <br/>
                        <input type="text" 
                         value={this.state.legalForm.next_court_date_outcome}
                         onChange={this.handleNameChange('next_court_date_outcome')}
                        /> <br/>

                        <label>ASYLUM APPLIED FOR</label> <br/>
                        <input type="text" 
                          value={this.state.legalForm.asylum_application}
                          onChange={this.handleNameChange('asylum_application')}
                        /> <br/>

                        <label>WORK AUTH</label> <br/>
                        <input type="text" 
                        value={this.state.legalForm.work_authorization}
                        onChange={this.handleNameChange('work_authorization')}
                        /> <br/>
                    
                        <button
                        className="formButton"
                        onClick={this.next}
                        >NEXT</button>
                    </div>
                </center>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(LegalStatusForm));