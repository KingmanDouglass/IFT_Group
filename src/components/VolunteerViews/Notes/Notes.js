import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import moment from 'moment'; 
import qs from 'query-string';


class Notes extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_NOTE', payload: searchObject.id });
        this.setState({
            addNote:{
                ...this.state.addNote,
                case_id: this.props.reduxState.caseIdReducer[0].id,
            }
        })
    }

  

    state = {
        addNote: {
            case_id: this.props.reduxState.caseIdReducer[0].id,
            family_notes: '',
            date: '',
        }
    }


     // set state for onChange of textfields 
     handleNameChange = (propertyName) => {  
        return(event) =>{
        this.setState({
            addNote: {
                ...this.state.addNote, 
                [propertyName]: event.target.value,
                }
            });
        } 
    }

    // dispatch POST and GET request for notes table 
    addNote = () => {
        this.props.dispatch({ type: 'ADD_NOTE', payload: this.state.addNote })
        this.props.dispatch({ type: 'GET_NOTE', payload: this.state.addNote.case_id });
    }

    // formatting date 
    formatDate = (date) => {
        let entryDate =  moment(date).subtract(10, 'days').calendar();
        return entryDate; 
    }

    render() {

        // render labels with empty information if reducer is empty
        let emptyNotes; 
        if(this.props.reduxState.noteReducer.length === 0) {
            emptyNotes = <h1> NO NOTES FOR THIS CASE </h1>
                    }

        return (
            <div>
                <Nav pageName='NOTES' volunteer home='/home' /> 
                    <center> 
                    {emptyNotes}
                        <label>ADD NOTE:</label>
                        <input type="text" 
                            value={this.state.addNote.family_notes}
                            onChange={this.handleNameChange('family_notes')}/>
                        <label>NOTE DATE:</label>
                        <input type="date"
                            value={this.state.addNote.date}
                            onChange={this.handleNameChange('date')}/>
                        <button className="formButton" onClick={this.addNote}>ADD</button>  
            
                        <h1>
                            PREVIOUS NOTES
                        </h1>

                        <div>
                            {this.props.reduxState.noteReducer.map((notes, index) =>
                                <div className="noteCard" key={index}>
                                        <p className="PNote" >{this.formatDate(notes.date)}</p>
                                        <hr/>
                                        <p className="PNote" >NOTE:</p>
                                    <p className="PNote" >{notes.family_notes}</p>
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

export default connect(mapReduxStateToProps)(Notes);