import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class Team extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        //we will need to ass in the search object to view WHERE ID = USER.ID
        this.props.dispatch({ type: 'GET_TEAM', payload: searchObject.id });
    }

    render() {

        // render label with empty information if teamReducer is empty
        let emptyTeam; 
        if(this.props.reduxState.teamReducer.length === 0) {
            emptyTeam = <div className="teamCard">
                            <label>NAME</label> 
                            <p className="PCard"></p>
                            <hr/>
                            <label>PHONE</label> 
                            <p className="PCard"></p>
                            <hr/>
                            <label>ENCRYPTED</label> 
                            <p className="PCard"></p>
                            <hr/>
                            <label>EMAIL</label> 
                            <p className="PCard"></p>
                            <hr/>
                            <label>SKILLS</label> 
                            <p className="PCard"></p>
                            <hr/>
                            <label>SECOND LANGUAGE</label> 
                            <p className="PCard"></p>
                            <hr/>
                            <label>ADDRESS</label> 
                            <p className="PCard"></p>
                        </div>
                    }

        return (
            <div>

                <Nav pageName='TEAM' volunteer home='/home' /> 
                    <center> 
                        <h1> VOLUNTEERS </h1>
                        {emptyTeam}
                        {this.props.reduxState.teamReducer.map((team,index) => (
                            <div className="teamCard" key={index}>
                                <label>NAME</label> 
                                <p className="PCard">{team.username}</p>
                                <hr/>
                                <label>PHONE</label> 
                                <p className="PCard">{team.phone}</p>
                                <hr/>
                                <label>ENCRYPTED</label> 
                                <p className="PCard">{team.encrypted}</p>
                                <hr/>
                                <label>EMAIL</label> 
                                <p className="PCard">{team.email}</p>
                                <hr/>
                                <label>SKILLS</label> 
                                <p className="PCard">{team.skills}</p>
                                <hr/>
                                <label>SECOND LANGUAGE</label> 
                                <p className="PCard">{team.second_language}</p>
                                <hr/>
                                <label>ADDRESS</label> 
                                <p className="PCard">{team.address}</p>
                            </div>
                        ))}
                    </center>

                </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Team);