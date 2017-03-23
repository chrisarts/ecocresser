import React from 'react';
import Helmet from 'react-helmet';

class Contact extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Helmet
                    title="Contacto"
                    titleTemplate="Cresser - %s"
                    defaultTitle="Cresser"
                    base={{target: "_blank", href: document.URL}}
                    meta={[
                        {name: "description", content: "Contácto Cresser"},
                        {property: "og:type", content: "article"},
                        {property: "og:title", content: "Contacto Cresser"},
                        {property: "og:url", content: `http://cresser.org/contacto`},
                        {property: "og:image", content: `http://cresser.org/images/metadata/contact.jpg`},
                    ]}
                    link={[
                        {rel: "canonical", href: "http://cresser.org/nosotros"}
                    ]}
                    onChangeClientState={(newState) => console.log(newState)}
                />
                <div className="headline cmsms_color_scheme_first">
                    <div className="headline_outer">
                        <div className="headline_color"></div>
                        <div className="headline_inner align_center">
                            <div className="headline_aligner"></div>
                            <div className="headline_text headline_subtitle">
                                <h1 className="entry-title">Contactanos</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cmsms_row cmsms_color_scheme_default" style={ {marginTop: 35} }>
                    <div className="cmsms_row_outer_parent">
                        <div className="cmsms_row_outer">
                            <div className="cmsms_row_inner">
                                <div className="cmsms_row_margin cmsms_1212">
                                    <div className="cmsms_column one_half">
                                        <h1 className="cmsms_heading">Envíanos tus comentarios</h1>
                                        <div className="cmsms_contact_form">
                                            <div className="cmsms-form-builder">
                                                <form action="#" method="post" id="form_2515">

                                                    <div className="form_info cmsms_input one_half">
                                                        <label htmlFor="cmsms_name">Nombre *</label>
                                                        <div className="form_field_wrap">
                                                            <input type="text" name="cmsms_name" id="cmsms_name" value="" size="35"/>
                                                        </div>
                                                    </div>
                                                    <div className="form_info cmsms_input one_half">
                                                        <label htmlFor="cmsms_mall">Correo*</label>
                                                        <div className="form_field_wrap">
                                                            <input type="text" name="cmsms_mall" id="cmsms_mall" value="" size="35" className="validate[custom[email]]"/>
                                                        </div>
                                                    </div>
                                                    <div className="form_info cmsms_input one_half">
                                                        <label htmlFor="cmsms_website">Sitio Web</label>
                                                        <div className="form_field_wrap">
                                                            <input type="text" name="cmsms_website" id="cmsms_website" value="" size="35"/>
                                                        </div>
                                                    </div>
                                                    <div className="form_info cmsms_input one_half">
                                                        <label htmlFor="cmsms_subject">Tema *</label>
                                                        <div className="form_field_wrap">
                                                            <input type="text" name="cmsms_subject" id="cmsms_subject" value="" size="35"/>
                                                        </div>
                                                    </div>
                                                    <div className="form_info cmsms_textarea one_first">
                                                        <label htmlFor="cmsms_message">Mensaje *</label>
                                                        <div className="form_field_wrap">
                                                            <textarea name="cmsms_message" id="cmsms_message" cols="60" rows="10"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="cl"></div>
                                                    <div className="loading"></div>
                                                    <div className="form_info submit_wrap">
                                                        <a id="cmsms_2515_formsend" className="cmsms_button" href="#"><span>Enviar Mensaje</span></a>
                                                    </div>
                                                    <div className="cl"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cmsms_column one_half">
                                        <h1 id="cmsms_heading_58ac59826647a" className="cmsms_heading">Información extra</h1>

                                        <ul className="cmsms_icon_list_items cmsms_icon_list_type_list cmsms_icon_list_pos_left cmsms_color_type_border">
                                            <li id="cmsms_icon_list_item_58ac5982667b2" className="cmsms_icon_list_item cmsms-icon-location-7">
                                                Cali, Valle del Cauca, Colombia
                                            </li>
                                            <li className="cmsms_icon_list_item cmsms-icon-mobile-6">
                                                +57 315-518-9182
                                            </li>
                                            <li className="cmsms_icon_list_item cmsms-icon-mail-7">
                                                asocresserltda@gmail.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;