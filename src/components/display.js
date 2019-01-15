import React from 'react';

export default class Display extends React.Component {
    render(){
        return(
            <div>
            <input type="text" className="form-control" placeholder="0" value={this.props.value} readOnly />
            </div>
        );
    }
}