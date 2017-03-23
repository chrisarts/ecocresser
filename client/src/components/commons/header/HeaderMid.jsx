import React from 'react'
import { Link } from 'react-router';

class HeaderMid extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="header_mid" style={{height: '95px'}}>
                <div className="header_mid_outer" style={{height: '95px'}}>
                    <div className="header_mid_inner">

                        <div className="logo_wrap">
                            <a href="/" title="Ecocresser" className="logo" style={{height: '95px'}}>
                                <img src={require('../../assets/header-logo.png')} alt="Eco Nature"/>
                                <img
                                    className="logo_retina"
                                    src="http://eco-nature.cmsmasters.net/wp-content/uploads/2014/07/logo-big.png"
                                    alt="Cresser Asociación"
                                    width="179"
                                    height="44"
                                />
                            </a>
                        </div>

                        <div className="resp_nav_wrap">
                            <div className="resp_nav_wrap_inner" style={{height: '95px'}}>
                                <div className="resp_nav_content">
                                    <a className="responsive_nav cmsms-icon-menu-2" href="javascript:void(0);"></a>
                                </div>
                            </div>
                        </div>
                        <nav role="navigation">
                            <div className="menu-main-container">
                                <ul id="navigation" className="navigation" style={{height: '95px'}}>
                                    <li
                                        id="menu-item-26"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-26"
                                        style={ { height: '95px' }}>
                                        <Link to="/" style={{height: '95px'}}>
                                            <span className="nav_bg_clr" style={{height: '95px'}}></span><span>Home</span>
                                        </Link>
                                    </li>
                                    <li
                                        id="menu-item-2352"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2352"
                                        style={{height: '95px'}}
                                    >
                                        <Link to="/blog" style={{height: '95px'}}>
                                            <span className="nav_bg_clr" style={{height: '95px'}}></span><span>Blog</span>
                                        </Link>
                                    </li>
                                    <li
                                        id="menu-item-2352"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2352"
                                        style={{height: '95px'}}
                                    >
                                        <Link to="/nosotros" style={{height: '95px'}}>
                                            <span className="nav_bg_clr" style={{height: '95px'}}></span><span>¿Quienes Somos?</span>
                                        </Link>
                                    </li>
                                    <li
                                        id="menu-item-2195"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2195 menu-item-mega menu-item-mega-cols-four"
                                        style={{height: '95px'}}
                                    >
                                        <Link to="/contacto" style={{height: '95px'}}>
                                            <span className="nav_bg_clr" style={{height: '95px'}}></span><span>Contactanos</span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="cl"></div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMid;