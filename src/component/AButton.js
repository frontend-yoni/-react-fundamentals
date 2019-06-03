import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBothArr } from '../reduxStuff/thunks/mainThunks';


class AButton extends Component {
    _onButtonClick = () => {
        const { firstArr, secondArr, dispatch } = this.props;
        firstArr.push('yoni');
        secondArr.push('boni');
        dispatch(updateBothArr(firstArr, secondArr));
    };

    render() {
        console.log('render');
        return <button className={ 'AButton' } onClick={ this._onButtonClick }>Press Me</button>
    }
}

const mapStateToProps = state => {
    let props = {
        firstArr: state.getIn(['first', 'firstArr']).toJS(),
        secondArr: state.getIn(['second', 'secondArr']).toJS()
    };
    return props
};

export default connect(mapStateToProps)(AButton)
