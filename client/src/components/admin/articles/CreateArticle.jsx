import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TinyMCE from 'react-tinymce';
import UploadPreview from 'material-ui-upload/UploadPreview';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Navigation from '../Navigation';

import { createArticle } from '../../../actions/articleActions';

import './articles.css';

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInputEvent(data){
    let errors = {};

    if(Validator.isEmpty(data.title)){
        errors.title = 'Este campo es obligatorio'
    }
    if(Validator.isEmpty(data.content)){
        errors.content = 'Este campo es obligatorio'
    }

    if(Validator.isEmpty(data.category)){
        errors.category = 'Este campo es obligatorio'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

class CreateArticle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
            media: {},
            category: '',
            date: new Date(),
            outstanding: false,
            active: true,
            errors: {},
            isLoading: false
        }
    }

    isValid(){
        const { errors, isValid } = validateInputEvent(this.state);

        if(!isValid){
            this.setState({ errors: errors })
        }

        return isValid;
    }

    onChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleEditorChange = (e) => {
        this.setState({
            content: e.target.getContent()
        })
    };

    onChangeMedia = (pictures) => {
        this.setState({ media: pictures });
        console.log(pictures);
    };

    onChangeCategory(event, index, value){
        this.setState({
            category: value
        })
    }

    onToggleActive(event, toggle){
        this.setState({
            active: toggle
        });
    }

    onSubmit(event){
        event.preventDefault();
        let This = this;
        if(This.isValid()){
            this.setState({ errors: {}, isLoading: true });
            console.log(this.state);
            this.props.createArticle(this.state).then(
                () => {
                    This.context.router.push('/cresser-admin/home');
                },
                (err) => this.setState({ errors: err.response, isLoading: false })
            );
        }
    }

    render(){
        const { errors, isLoading } = this.state;
        return(
            <div>
                <Navigation/>
                <div className="admin-page">
                    <AppBar
                        title="Crear Nuevo Artículo"
                    />
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <TextField
                            name="title"
                            floatingLabelText="Título del Artículo *"
                            value={this.state.title}
                            errorText={errors.title}
                            onChange={this.onChange.bind(this)}
                        />
                        <TinyMCE
                            content="<p>Cóntenido del artículo...</p>"
                            config={{
                                plugins: 'link image code',
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                            onChange={this.handleEditorChange.bind(this)}
                            errorText={errors.content}
                        />
                        <UploadPreview
                            title="Imágenes"
                            label="Añadir"
                            className="image-upload"
                            initialItems={this.state.pictures}
                            onChange={this.onChangeMedia}
                        />
                        <SelectField
                            name="category"
                            floatingLabelText="Selecciona la categoría"
                            value={this.state.category}
                            errorText={errors.category}
                            onChange={this.onChangeCategory.bind(this)}
                        >
                            <MenuItem value="eco-cresser" primaryText="ECO CRESSER" />
                            <MenuItem value="akash" primaryText="AKASH" />
                            <MenuItem value="gato-psicodelia" primaryText="GATO PSICODELIA" />
                            <MenuItem value="se-dice-en-la-montana" primaryText="SE DICE EN LA MONTAÑA" />
                            <MenuItem value="jahgrownomia" primaryText="JAHGROWNOMIA" />
                            <MenuItem value="roncitos-y-porritos" primaryText="RONCITOS Y PORRITOS" />
                            <MenuItem value="encuentro-nomada" primaryText="ENCUENTRO NOMADA" />
                            <MenuItem value="zorro-del-desierto" primaryText="ZORRO DEL DESIERTO" />
                        </SelectField>
                        <Toggle
                            label="¿Artículo activo?"
                            labelPosition="right"
                            defaultToggled={this.state.active}
                            onToggle={this.onToggleActive}
                        />
                        <RaisedButton
                            label="Ingresar Artículo"
                            type="submit"
                            disabled={isLoading}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

CreateArticle.PropTypes = {
    createArticle: React.PropTypes.func.isRequired
};

CreateArticle.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(null, { createArticle })(CreateArticle);