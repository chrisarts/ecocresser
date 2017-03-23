import React from 'react';

import HeaderMid from './HeaderMid';

class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="header">
                <div className="header_top">
                    <div className="header_top_outer">
                        <div className="header_top_inner">
                            <div className="header_top_right">
                                <div className="header_top_aligner"></div>
                                <div className="social_wrap">
                                    <div className="social_wrap_inner">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/asocresser/?pnref=lhc" className="cmsms-icon-facebook-circled" title="Facebook" target="_blank"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="header_top_left">
                                <div className="header_top_aligner">

                                </div>
                                <div className="meta_wrap">
                                    <div className="adr cmsms-icon-location-7">
                                        <span className="locality">Cali</span>, Valle del Cauca,
                                        <span className="country-name">Colombia</span>
                                    </div>
                                    <div className="tel cmsms-icon-mobile-6">315-518-9182</div>
                                    <div className="email cmsms-icon-mail-7">
                                        <a href="mailto:example@econature.com">asocresserltda@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cl"></div>
                        </div>
                    </div>
                </div>
                <HeaderMid/>
            </div>
        )
    }
}

export default Header;