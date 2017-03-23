import React from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/lib/Carousel';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Helmet from 'react-helmet';

import { getArticleListLimit } from '../actions/articleActions';

class HomeSlider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
        };
    }

    render(){
        return(
            <Carousel>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <img src="/images/1.jpg"/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <img src="/images/2.jpg"/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <img src="/images/3.jpg"/>
                </Carousel.Item>
            </Carousel>
        );
    }
}

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            articlesLimit: []
        }
    }

    componentDidMount(){
        let This = this;
        This.props.getArticleListLimit().then(result => {
            This.setState({
                articlesLimit: result.data.articles
            })
        })
    }

    render(){
        return(
            <div className="page home">
                <Helmet
                    title="Home"
                    titleTemplate="Cresser - %s"
                    defaultTitle="Cresser"
                    base={{target: "_blank", href: document.URL}}
                    meta={[
                        {name: "description", content: "Home Cresser"},
                        {property: "og:type", content: "article"},
                        {property: "og:title", content: "Cresser"},
                        {property: "og:url", content: `http://cresser.org`},
                        {property: "og:image", content: `http://cresser.org/images/metadata/home.jpg`},
                    ]}
                    link={[
                        {rel: "canonical", href: "http://cresser.org"}
                    ]}
                    onChangeClientState={(newState) => console.log(newState)}
                />
                <HomeSlider/>
                <div id="cmsms_row_58a0b9aba57ba" className="cmsms_row cmsms_color_scheme_default page_section">
                    <Row>
                        {
                            this.state.articlesLimit.map(article => {
                                let media = JSON.parse(article.media);
                                    let count = 0;
                                    let image = '';
                                    for (let key in media) {
                                        if (media.hasOwnProperty(key) && count == 0) {
                                            image = media[key];
                                            ++count;
                                        }
                                    }
                                return(
                                    <Col xs={4} md={4} key={article.id}>
                                        <Thumbnail src={image}>
                                            <h3>{article.title}</h3>
                                            <p dangerouslySetInnerHTML={ { __html: article.content } }>

                                            </p>
                                        </Thumbnail>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                <div id="cmsms_row_58a0b9abc3ce5" className="cmsms_row cmsms_color_scheme_default page_section">
                    <div className="cmsms_row_outer_parent">
                        <div className="cmsms_row_outer">
                            <div className="cmsms_row_inner">
                                <div className="cmsms_row_margin cmsms_11">
                                    <div className="cmsms_column one_first">
                                        <h1 id="cmsms_heading_58a0b9abc40c6" className="cmsms_heading">Nuestra Causa</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cmsms_row_58a0b9abc4212" className="cmsms_row cmsms_color_scheme_default page_section">
                    <div className="cmsms_row_outer_parent">
                        <div className="cmsms_row_outer">
                            <div className="cmsms_row_inner">
                                <div className="cmsms_row_margin cmsms_1212">
                                    <div className="cmsms_column one_half">

                                        <ul id="cmsms_icon_list_items_58a0b9abc456d" className="cmsms_icon_list_items cmsms_icon_list_type_block cmsms_icon_list_pos_right cmsms_color_type_icon"><li id="cmsms_icon_list_item_58a0b9abc46f7" className="cmsms_icon_list_item shortcode_animated">
                                            <div className="cmsms_icon_list_item_inner">
                                                <div className="cmsms_icon_list_icon_wrap">
                                                    <span className="cmsms_icon_list_icon cmsms-icon-garden-7">
                                                        <Glyphicon className="home-icon" glyph="grain" />
                                                    </span>
                                                </div>
                                                <div className="cmsms_icon_list_item_content">
                                                    <h2 className="cmsms_icon_list_item_title"> Seguridad Alimentaria</h2>
                                                    <div className="cmsms_icon_list_item_text">
                                                        <p>
                                                            Seguridad Alimentaria a partir de la implantación de sistemas de cultivo ancestrales y del mundo moderno
                                                            para el autoabastecimiento de comida comenzando desde el hogar.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li><li id="cmsms_icon_list_item_58a0b9abc4829" className="cmsms_icon_list_item shortcode_animated">
                                            <div className="cmsms_icon_list_item_inner">
                                                <div className="cmsms_icon_list_icon_wrap">
                                                    <span className="cmsms_icon_list_icon cmsms-icon-garden-7">
                                                        <Glyphicon className="home-icon" glyph="facetime-video" />
                                                    </span>
                                                </div>
                                                <div className="cmsms_icon_list_item_content">
                                                    <h2 className="cmsms_icon_list_item_title">Producción Audiovisual</h2>
                                                    <div className="cmsms_icon_list_item_text">
                                                        <p>
                                                            El indispensable acompañamiento de nuestro equipo documental que se encarga de capturar
                                                            cada una de nuestros proyectos para compartirlos con cualquiera que pueda estar interesado en nuestra
                                                            causa.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li></ul>
                                    </div>
                                    <div className="cmsms_column one_half">

                                        <ul id="cmsms_icon_list_items_58a0b9abc4c07" className="cmsms_icon_list_items cmsms_icon_list_type_block cmsms_icon_list_pos_left cmsms_color_type_icon"><li id="cmsms_icon_list_item_58a0b9abc4d5a" className="cmsms_icon_list_item shortcode_animated">
                                            <div className="cmsms_icon_list_item_inner">
                                                <div className="cmsms_icon_list_icon_wrap">
                                                    <span className="cmsms_icon_list_icon cmsms-icon-garden-7">
                                                        <Glyphicon className="home-icon" glyph="tree-deciduous" />
                                                    </span>
                                                </div>
                                                <div className="cmsms_icon_list_item_content">
                                                    <h2 className="cmsms_icon_list_item_title">Recuperación de Saberes Ancestrales</h2>
                                                    <div className="cmsms_icon_list_item_text">
                                                        <p>
                                                            Resultados de nuestras investigaciones y relaciones con pueblos indigenas alrededor del mundo
                                                            para traer a la modernidad nuestros saberes perdidos a travez del tiempo, y encontrar identidad cultural.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li><li id="cmsms_icon_list_item_58a0b9abc4e92" className="cmsms_icon_list_item shortcode_animated">
                                            <div className="cmsms_icon_list_item_inner">
                                                <div className="cmsms_icon_list_icon_wrap">
                                                    <span className="cmsms_icon_list_icon cmsms-icon-garden-8">
                                                        <Glyphicon className="home-icon" glyph="user" />
                                                    </span>
                                                </div>
                                                <div className="cmsms_icon_list_item_content">
                                                    <h2 className="cmsms_icon_list_item_title">Trabajo Social</h2>
                                                    <div className="cmsms_icon_list_item_text">
                                                        <p>
                                                            A travez de nuestra plataforma "Encuentro Nomada" en la que se práctica el Etno-Turismo a travez de
                                                            voluntariados a distintas zonas de Colombia, en la que se realizan distintos trabajos sociales.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li></ul>
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

Home.PropTypes = {
    getArticleListLimit: React.PropTypes.isRequired
};

export default connect(null, { getArticleListLimit })(Home);