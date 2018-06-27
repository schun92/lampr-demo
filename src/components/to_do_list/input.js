import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);

        this.state = {
            className: ''
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.submitted !== this.props.submitted && this.props.submitted){
            
            this.setState({
                className: ''
            });

            if(this.props.focus){
                this.input.focus();
            }
        }
    }

    handleFocus(){
        this.setState({
            className: 'active'
        });
    }

    handleBlur(){
        if(this.props.value === ''){
            this.setState({
                className: ''
            });
        }
    }

    render(){
        const { className } = this.state;
        const { autoComplete, value, onChange, label, type, name } = this.props;

        return (
            <div className="input-field col s6">
                <input 
                    name={name}
                    type={type || 'text'}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete || 'off'}
                    onBlur={this.handleBlur.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    ref={ el => this.input = el}
                />
                <label className={className}>{label}</label>
            </div>
        );
    }
}

export default Input;
