import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';

class MedicalEdit extends Component {
   
    //on the load of the page check the query string in the url and pull the id
    //use the id to dispatch all the medical information for that specific file
    //set the state to put that id in as case_id
    //conditional statement to check if the reducer has any values
    //if the reducer is empty then render a blank form
    //also if empty change from the button being a POST instead of a PUT
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_MEDICAL', payload: searchObject.id });
        // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if(this.props.reduxState.medicalReducer.length === 0) {
        this.setState({
            medicalForm: {
                case_id: searchObject.id,
                doctor_name: null, 
                doctor_phone: null, 
                medical_conditions: null, 
                counselor: null, 
                counselor_phone: null,  
                pediatrician: null, 
                pediatrician_phone: null, 
                optometrist: null, 
                optometrist_phone: null,  
                dentist: null, 
                dentist_phone: null, 
                vaccinations: null, 
                insurance_card_info: null,  
                fee_coverage: null,  
                medical_notes: null, 
                data:false
            }
        })
            
        } else {
        this.setState({
            medicalForm:{
                ...this.state.medicalForm,
                case_id: searchObject.id,
                doctor_name: this.props.reduxState.medicalReducer[0].doctor_name, 
                doctor_phone: this.props.reduxState.medicalReducer[0].doctor_phone, 
                medical_conditions: this.props.reduxState.medicalReducer[0].medical_conditions, 
                counselor: this.props.reduxState.medicalReducer[0].counselor, 
                counselor_phone: this.props.reduxState.medicalReducer[0].counselor_phone, 
                pediatrician: this.props.reduxState.medicalReducer[0].pediatrician, 
                pediatrician_phone: this.props.reduxState.medicalReducer[0].pediatrician_phone, 
                optometrist: this.props.reduxState.medicalReducer[0].optometrist,
                optometrist_phone: this.props.reduxState.medicalReducer[0].optometrist_phone, 
                dentist: this.props.reduxState.medicalReducer[0].dentist, 
                dentist_phone: this.props.reduxState.medicalReducer[0].dentist_phone, 
                vaccinations: this.props.reduxState.medicalReducer[0].vaccinations, 
                insurance_card_info: this.props.reduxState.medicalReducer[0].insurance_card_info, 
                fee_coverage: this.props.reduxState.medicalReducer[0].fee_coverage, 
                medical_notes: this.props.reduxState.medicalReducer[0].medical_notes, 
                data: true, 
                }
            })  
        }
    }

    // conditional to determine a POST or a PUT 
    next = () => {
        if (this.state.medicalForm.data === false) {
            this.props.dispatch({ type: 'ADD_MEDICAL', payload: this.state.medicalForm })
        } else (
            this.props.dispatch({ type: 'PUT_MEDICAL', payload: this.state.medicalForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.medicalForm.case_id}`)
    }

    state = {
        medicalForm: {
            case_id: '',
            doctor_name: '',
            doctor_phone: '',
            medical_conditions: '',
            counselor: '',
            counselor_phone: '',
            pediatrician: '',
            pediatrician_phone: '',
            optometrist: '',
            optometrist_phone: '',
            dentist: '',
            dentist_phone: '',
            vaccinations: '',
            insurance_card_info: '',
            fee_coverage: '',
            medical_notes: '',
            data: '', 
        }
    }

    handleChange = propertyName => event => {
        this.setState({
            medicalForm: {
                ...this.state.medicalForm,
                [propertyName]: event.target.value,
            }
        })
}
    
    render() {

        // if the reducer is empty, display input with null values to edit 
        let checkMedical; 
        let state = this.state.medicalForm; 
        if(this.props.reduxState.medicalReducer.length === 0) {
            checkMedical = <div className="formDivs">
                                <label>PRIMARY DOCTOR NAME</label> 
                                        <input type="text"
                                        defaultValue={state.doctor_name}
                                        onChange={this.handleChange('doctor_name')}/> 
                                        
                                        <label>PRIMARY DOCTOR PHONE</label> 
                                        <input type="text"
                                        defaultValue={state.doctor_phone}
                                        onChange={this.handleChange('doctor_phone')}/> 
                                    
                                        <label>MEDICAL CONDITIONS</label> 
                                        <input type="text"
                                        defaultValue={state.medical_conditions}
                                        onChange={this.handleChange('medical_conditions')}/> 

                                        <label>COUNSELOR NAME</label> 
                                        <input type="text"
                                        defaultValue={state.counselor}
                                        onChange={this.handleChange('counselor')}/> 
                                        
                                        <label>COUNSELOR PHONE</label> 
                                        <input type="text" 
                                        defaultValue={state.counselor_phone}
                                        onChange={this.handleChange('counselor_phone')}/> 
                                        
                                        <label>PEDIATRICIAN NAME</label> 
                                        <input type="text"
                                        defaultValue={state.pediatrician}
                                        onChange={this.handleChange('pediatrician')}/> 
                                        
                                        <label>PEDIATRICIAN PHONE</label> 
                                        <input type="text"
                                        defaultValue={state.pediatrician_phone}
                                        onChange={this.handleChange('pediatrician_phone')}/> 
                                    
                                        <label>OPTOMETRIST NAME</label> 
                                        <input type="text"
                                        defaultValue={state.optometrist}
                                        onChange={this.handleChange('optometrist')}/> 
                                        
                                        <label>OPTOMETRIST PHONE</label> 
                                        <input type="text"
                                        defaultValue={state.optometrist_phone}
                                        onChange={this.handleChange('optometrist_phone')}/> 
                                        
                                        <label>DENTIST NAME</label> 
                                        <input type="text"
                                        defaultValue={state.dentist}
                                        onChange={this.handleChange('dentist')}/> 
                                        
                                        <label>DENTIST PHONE</label> 
                                        <input type="text"
                                        defaultValue={state.dentist_phone}
                                        onChange={this.handleChange('dentist_phone')}/> 
                                        
                                        <label>VACCINATIONS</label> 
                                        <input type="text"
                                        defaultValue={state.vaccinations}
                                        onChange={this.handleChange('vaccinations')}/> 
                                        
                                        <label>INSRUANCE CARD INFO</label> 
                                        <input type="text"
                                        defaultValue={state.insurance_card_info}
                                        onChange={this.handleChange('insurance_card_info')}/> 
                                        
                                        <label>FEE COVERAGE</label> 
                                        <select
                                        defaultValue={state.fee_coverage}
                                        onChange={this.handleChange('fee_coverage')}>
                                        <option> - </option> 
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                        </select> 
                                        
                                        <label>MEDICAL NOTES</label> 
                                        <input type="text"
                                        defaultValue={state.medical_notes}
                                        onChange={this.handleChange('medical_notes')}/> 

                                        <button
                                        className="formButton"
                                        onClick={this.next}
                                        >UPDATE FORM
                                        </button>
                            </div>
        } 

        return (
            <div>
                <Nav pageName='MEDICAL FORM' home='/home'/>

                <center>
                {checkMedical}
                {this.props.reduxState.medicalReducer.map((medical, index) =>

                    <div className="formDivs" key={index}>
                        
                        <label>PRIMARY DOCTOR NAME</label> 
                        <input type="text"
                        defaultValue={medical.doctor_name}
                        onChange={this.handleChange('doctor_name')}/> 
                        
                        <label>PRIMARY DOCTOR PHONE</label> 
                        <input type="text"
                        defaultValue={medical.doctor_phone}
                        onChange={this.handleChange('doctor_phone')}/> 
                    
                        <label>MEDICAL CONDITIONS</label> 
                        <input type="text"
                        defaultValue={medical.medical_conditions}
                        onChange={this.handleChange('medical_conditions')}/> 

                        <label>COUNSELOR NAME</label> 
                        <input type="text"
                        defaultValue={medical.counselor}
                        onChange={this.handleChange('counselor')}/> 
                        
                        <label>COUNSELOR PHONE</label> 
                        <input type="text" 
                        defaultValue={medical.counselor_phone}
                        onChange={this.handleChange('counselor_phone')}/> 
                        
                        <label>PEDIATRICIAN NAME</label> 
                        <input type="text"
                        defaultValue={medical.pediatrician}
                        onChange={this.handleChange('pediatrician')}/> 
                        
                        <label>PEDIATRICIAN PHONE</label> 
                        <input type="text"
                        defaultValue={medical.pediatrician_phone}
                        onChange={this.handleChange('pediatrician_phone')}/> 
                       
                        <label>OPTOMETRIST NAME</label> 
                        <input type="text"
                        defaultValue={medical.optometrist}
                        onChange={this.handleChange('optometrist')}/> 
                        
                        <label>OPTOMETRIST PHONE</label> 
                        <input type="text"
                        defaultValue={medical.optometrist_phone}
                        onChange={this.handleChange('optometrist_phone')}/> 
                        
                        <label>DENTIST NAME</label> 
                        <input type="text"
                        defaultValue={medical.dentist}
                        onChange={this.handleChange('dentist')}/> 
                        
                        <label>DENTIST PHONE</label> 
                        <input type="text"
                        defaultValue={medical.dentist_phone}
                        onChange={this.handleChange('dentist_phone')}/> 
                        
                        <label>VACCINATIONS</label> 
                        <input type="text"
                        defaultValue={medical.vaccinations}
                        onChange={this.handleChange('vaccinations')}/> 
                        
                        <label>INSRUANCE CARD INFO</label> 
                        <input type="text"
                        defaultValue={medical.insurance_card_info}
                        onChange={this.handleChange('insurance_card_info')}/> 
                        
                        <label>FEE COVERAGE</label> 
                        <select
                        defaultValue={medical.fee_coverage}
                        onChange={this.handleChange('fee_coverage')}>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                        </select> 
                        
                        <label>MEDICAL NOTES</label> 
                        <input type="text"
                        defaultValue={medical.medical_notes}
                        onChange={this.handleChange('medical_notes')}/> 
                        
                        <button
                        className="formButton"
                        onClick={this.next}
                        >UPDATE FORM</button>

                    </div>
                )}
                </center>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(MedicalEdit));