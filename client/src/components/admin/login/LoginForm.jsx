import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data){
    let errors = {};

    if(Validator.isEmpty(data.identifier)){
        errors.identifier = 'Este campo es obligatorio'
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Este campo es obligatorio'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({ [event.target.name]: event.target.value })
    }

    isValid(){
        const { errors, isValid } = validateInput(this.state);

        if(!isValid){
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(event){
        event.preventDefault();
        if(this.isValid()){
            this.setState({
                errors: {},
                isLoading: true
            });
            this.props.login(this.state).then(
                (res) => this.context.router.push('/cresser-admin/home'),
                (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }
    }

    render(){
        const { errors, identifier, password } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <hgroup>
                    <img src={require('../../assets/header-logo.png')} alt=""/>
                    { errors.form && <h4>{errors.form}</h4> }
                </hgroup>
                <TextField
                    name="identifier"
                    floatingLabelText="Nombre de Usuario"
                    value={identifier}
                    errorText={errors.identifier}
                    onChange={this.onChange}
                />
                <TextField
                    name="password"
                    floatingLabelText="Contraseña"
                    value={password}
                    errorText={errors.password}
                    onChange={this.onChange}
                    type="password"
                />
                <RaisedButton
                    label="Ingresar"
                    type="submit"
                />
            </form>
        );
    }
}

LoginForm.PropTypes = {
    login: React.PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);