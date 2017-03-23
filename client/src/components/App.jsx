import React from 'react';


import Header from './commons/header/Header';

class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="main">
                <Header/>
                <section id="middle">
                    <div className="middle_inner">
                        {this.props.children}
                    </div>
                </section>
                <footer id="footer" role="contentinfo" className="cmsms_color_scheme_footer cmsms_footer_small">
                    <div className="footer_bg">
                        <div className="footer_inner">
                            <div className="social_wrap">
                                <div className="social_wrap_inner">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/asocresser/?pnref=lhc" className="cmsms-icon-facebook-circled" title="Facebook" target="_blank"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span className="copyright">Fabricado con ❤ por: Cresser Asociación © 2017 | Derechos Reservados</span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;