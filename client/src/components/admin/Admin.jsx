import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './layout.css';

class Admin extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Admin;