import React, { Component } from 'react';
import { connect } from 'react-redux';


class LegalIce extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_BOND' });
        console.log('GET_BOND', this.props.reduxState.bondReducer);
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            ICE FACILITY
                        </h1>
                    </div>

                    <div>{this.props.reduxState.bondReducer.map(bond =>
                    <div>
                        <p className="bioDivs">ICE FACILITY: {bond.ice_facility}</p>
                        <p className="bioDivs">NOTES: {bond.legal_notes}</p>
                    </div>
                    )}
                    </div>


                    {/* <label>ICE FACILITY: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>NOTES: </label> <br/> 
                    <div className="bioDivs"> </div> <br/>  */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalIce);