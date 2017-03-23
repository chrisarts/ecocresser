import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import {
    CommunicationImportContacts,
    ActionList,
    ContentCreate
} from 'material-ui/svg-icons';

import { logout } from '../../actions/authActions';

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            drawer: true
        }
    }

    logout(event){
        event.preventDefault();
        this.props.logout();
    }

    render(){
        const userLinks = (
            <div>
                <Link to="/#">
                    <FlatButton
                        label="Salir"
                        onClick={this.logout.bind(this)}
                    />
                </Link>
            </div>
        );
        return(
            <div>
                <Drawer open={this.state.drawer}>
                    <AppBar
                        title="Menú"
                        iconElementRight={userLinks}
                    />
                    <List>
                        <Subheader>Menú de administración</Subheader>
                        <ListItem
                            primaryText="Articulos"
                            leftIcon={<CommunicationImportContacts />}
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={2}
                                    primaryText="Lista"
                                    leftIcon={<ActionList />}
                                    href="/cresser-admin/home"
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="Crear"
                                    leftIcon={<ContentCreate />}
                                    href="/cresser-admin/articles/create"
                                />,
                            ]}
                        />
                    </List>
                </Drawer>
            </div>
        )
    }
}

Navigation.PropTypes = {
    logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Navigation);