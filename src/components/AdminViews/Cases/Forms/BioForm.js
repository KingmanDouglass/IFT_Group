import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Nav from '../../../Nav/Nav'
class BioForm extends Component {

    state= {
        bioForm: {
            first_name:'',
            last_name:'',
            dob:'',
            spouse_first_name:'',
            spouse_dob:'',
            phone:'',
            encrypted: '',
            email:'',
            address:'',
            referred_by:'',
            reference_date:'',
            passport: false,
            us_id: false,


        }
    }

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            bioForm: {
                first_name:'Mary',
                last_name:'Mosman',
                dob:'07/04/1982',
                spouse_first_name:'Rick',
                spouse_dob:'10/31/1976',
                phone:'555-555-5555',
                encrypted: 'MosStar',
                email:'MMosman@gmail.com',
                address:'333 Spruce St Burnsville MN',
                referred_by:'John Doe',
                reference_date:'05/01/2019',
                passport: false,
                us_id: false,
            }
        })
      }

    handleChange = propertyName => event => {
        console.log(`this is the propertyName:`, propertyName);
        console.log(`this is target value:`, event.target.value)
        this.setState({
            bioForm: {
                ...this.state.bioForm,
                [propertyName]: event.target.value,
            }
        })
        console.log(`this is state after handleChange:`, this.state)
    }

   next = () => {
    this.props.dispatch({ type: 'ADD_BIO', payload: this.state.bioForm })

    this.props.history.push('/children-form');

   }

    backButton = () => {
    this.props.history.push(`/cases`)
  }

    render() {
        return (
            <div>
                <Nav pageName='BIO' backArrow='/cases' home='/home'/>
                
                <center>
                    <div>
                        <h1>
                            BIO FORM
                        </h1>
                    </div>
                    <div className="formDivs" >
                        <label>FIRST NAME</label> 
                        <input type="text" value={this.state.bioForm.first_name} onChange={this.handleChange('first_name')}/> 
                        <label>LAST NAME</label> 
                        <input type="text" value={this.state.bioForm.last_name} onChange={this.handleChange('last_name')}/> 
                        <label>D.O.B</label> 
                        <input type="date" value={this.state.bioForm.dob} onChange={this.handleChange('dob')} /> 
                        <label>SPOUSE NAME</label> 
                        <input type="text" value={this.state.bioForm.spouse_first_name} onChange={this.handleChange('spouse_first_name')}/> 
                        <label>SPOUNSE D.O.B</label> 
                        <input type="date" value={this.state.bioForm.spouse_dob} onChange={this.handleChange('spouse_dob')}/> 
                        <label>PHONE</label> 
                        <input type="text" value={this.state.bioForm.phone} onChange={this.handleChange('phone')} /> 
                        <label>ENCRYPTED</label> 
                        <input type="text" 
                        value={this.state.bioForm.encrypted} onChange={this.handleChange('encrypted')} /> 
                        <label>EMAIL</label> 
                        <input type="text" 
                         value={this.state.bioForm.email} onChange={this.handleChange('email')} 
                        /> 
                        <label>ADDRESS</label> 
                        <input type="text"
                         value={this.state.bioForm.address} onChange={this.handleChange('address')} /> 
                        <label>REFERRED BY</label> 
                        <input type="text" 
                        value={this.state.bioForm.referred_by} onChange={this.handleChange('referred_by')}
                        /> 
                        <label>REFERENCE DATE</label> 
                        <input type="date"
                        value={this.state.bioForm.reference_date} onChange={this.handleChange('reference_date')}
                        /> 
                        <label>PASSPORT Y/N</label> 
                        <select
                        onChange={this.handleChange('passport')}
                        >
                            <option></option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <label>USA I.D Y/N</label> 
                        <select 
                        onChange={this.handleChange(`us_id`)}
                        >
                            <option></option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <button className="formButton" onClick={this.next}>NEXT</button>
                        <button className="formButton" onClick={this.autoPopulate}>FILL INFO</button> 
                        
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
  export default withRouter(connect(mapStateToProps)(BioForm));
