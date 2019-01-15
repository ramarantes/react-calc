import React from 'react'
import Btn from './button';

export default class Keyboard extends React.Component {
    render(){
        return(
            <div className="container keyboard text-center rounded">
            <div className="row text-primary">
                <Btn value="C" onClick={this.props.onClick} className="text-danger"/>
                <Btn value="()" onClick={this.props.onClick}/>
                <Btn value="%" onClick={this.props.onClick}/>
                <Btn value="/" onClick={this.props.onClick}/>
            </div>
            <div className="row">
                <Btn value="7" onClick={this.props.onClick} />
                <Btn value="8" onClick={this.props.onClick}/>
                <Btn value="9" onClick={this.props.onClick}/>
                <Btn value="*" onClick={this.props.onClick} className="text-primary"/>
            </div>
            <div className="row">
                <Btn value="4" onClick={this.props.onClick}/>
                <Btn value="5" onClick={this.props.onClick}/>
                <Btn value="6" onClick={this.props.onClick}/>
                <Btn value="-" onClick={this.props.onClick} className="text-primary"/>
            </div>
            <div className="row">
                <Btn value="1" onClick={this.props.onClick}/>
                <Btn value="2" onClick={this.props.onClick}/>
                <Btn value="3" onClick={this.props.onClick}/>
                <Btn value="+" onClick={this.props.onClick} className="text-primary"/>
            </div>
            <div className="row">
                <Btn value="+/-" onClick={this.props.onClick}/>
                <Btn value="0" onClick={this.props.onClick}/>
                <Btn value="." onClick={this.props.onClick}/>
                <Btn value="=" onClick={this.props.onClick} className="bg-primary"/>
            </div>
            </div>
        );
    }
}