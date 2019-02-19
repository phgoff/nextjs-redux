import React from 'react';
import { connect } from 'react-redux';
import {
    increaseNumber,
    decreaseNumber
} from '../redux/actions';

class Number extends React.Component{
    constructor(props){
        super(props);
    }

    // handleIncreaseNumber = () =>{
    //     let { number } = this.state; 
    //     number = number + 1;
    //     this.setState({number})
    // }
    // handleDecreaseNumber = () =>{
    //     let number = this.state.number;
    //     number = number - 1;
    //     this.setState({number})
    // }
    render() {
        const {number} = this.props;
        return (
            <div style={ {textAlign: 'center' }}>
                <h1>Number: {number} </h1>
                <button onClick={this.props.increaseNumber}> + </button>
                <button onClick={this.props.decreaseNumber} style={ {marginLeft: '10px'}}> - </button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

const mapActionsToProps =  {
    increaseNumber,
    decreaseNumber
}
export default connect(mapStateToProps, mapActionsToProps)(Number);