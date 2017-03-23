import React from 'react';
import Helmet from 'react-helmet';

class About extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <Helmet
                    title="Sobre Nosotros"
                    titleTemplate="Cresser - %s"
                    defaultTitle="Cresser"
                    base={{target: "_blank", href: document.URL}}
                    meta={[
                        {name: "description", content: "Sobre Nosotros Cresser"},
                        {property: "og:type", content: "article"},
                        {property: "og:title", content: "Sobre Nosotros"},
                        {property: "og:url", content: `http://cresser.org/nosotros`},
                        {property: "og:image", content: `http://cresser.org/images/metadata/about.jpg`},
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
                                <h1 className="entry-title">Sobre Nosotros</h1>
                                <h5>Conoce Nuestro Equipo</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cmsms_row_58ab432046544" className="cmsms_row cmsms_color_scheme_default">
                    <div className="cmsms_row_outer_parent">
                        <div className="cmsms_row_outer">
                            <div className="cmsms_row_inner">
                                <div className="cmsms_row_margin cmsms_11">
                                    <div className="cmsms_column one_first">
                                        <h1 id="cmsms_heading_58ab4320468d3" className="cmsms_heading">Sobre Nosotros</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cmsms_row_58ab432046a76" className="cmsms_row cmsms_color_scheme_default">
                    <div className="cmsms_row_outer_parent">
                        <div className="cmsms_row_outer">
                            <div className="cmsms_row_inner">
                                <div className="cmsms_row_margin cmsms_11">
                                    <div className="cmsms_column one_first">
                                        <div className="cmsms_profile horizontal">
                                            <article className="one_third format-profile">
                                                <div className="pl_img">
                                                    <figure>
                                                        <img width="580" height="390" src={require('./mision.jpg')} className="attachment-blog-masonry-thumb size-blog-masonry-thumb wp-post-image"/>
                                                    </figure>
                                                </div>
                                                <div className="pl_content">
                                                    <h2 className="entry-title">
                                                        Nuestra Misión
                                                    </h2>
                                                    <h5 className="pl_subtitle">Ecocresser</h5>
                                                    <div className="entry-content">
                                                        Durante estos últimos 5 años, nuestra misión ha sido desarrollar proyectos que conectan zonas
                                                        vulnerables del país, pero con distintos entornos enfocándonos en la educación ambiental,
                                                        seguridad alimentaria y recuperación de saber ancestral, de los niños y jóvenes de los
                                                        departamentos del (Valle y Cauca) dando conciencia del medio ambiente, el arte como
                                                        sanación del conflicto, recuperación de ríos y humedales, técnicas y herramientas para el
                                                        desarrollo de un mejor futuro para las comunidades indígenas y afrodescendientes.

                                                    </div>
                                                </div>
                                                <div className="cl"></div>
                                            </article>
                                            <article className="one_third profile_even format-profile">
                                                <div className="pl_img">
                                                    <figure>
                                                        <img width="580" height="390" src={require('./vision.jpg')} className="attachment-blog-masonry-thumb size-blog-masonry-thumb wp-post-image"/>
                                                    </figure>
                                                </div>
                                                <div className="pl_content">
                                                    <h2 className="entry-title">
                                                        Nuestra Visión
                                                    </h2>
                                                    <h5 className="pl_subtitle">Ecocresser</h5>
                                                    <div className="entry-content">
                                                        Nuestra ONG crea y desarrolla proyectos de seguridad alimentaria, eco sostenibilidad,
                                                        eco construcción, sanación social, junto a talleres técnicos, artísticos y capacitaciones
                                                        agroecológicas; Principalmente en instituciones públicas de zonas vulnerables y conflicto.<br/>
                                                        Nuestro proyecto principal en desarrollo, ACUAPONIA “VERDURA Y PEZ A LA VEZ”; donde hemos
                                                        desarrollado esta técnica ancestral, en prototipos caseros artesanales, industriales y
                                                        principalmente como Modelo Social Holístico, urbano y rural.<br/>
                                                        Iniciando este proyecto en Cali (Valle) la comuna 7 Barrio Alfonso López en la Escuela
                                                        Eloy Valenzuela (Zona Urbana); y en Caloto (Cauca) la vereda del Credo en la Institución
                                                        Agropecuaria y Etnoeducativa El Credo (Zona Rural).

                                                    </div>
                                                </div>
                                                <div className="cl"></div>
                                            </article>
                                            <article className="one_third format-profile">
                                                <div className="pl_img">
                                                    <figure>
                                                        <img width="580" height="390" src={require('./educacion.jpg')} className="attachment-blog-masonry-thumb size-blog-masonry-thumb wp-post-image"/>
                                                    </figure>
                                                </div>
                                                <div className="pl_content">
                                                    <h2 className="entry-title">
                                                        Compromiso Educativo
                                                    </h2>
                                                    <h5 className="pl_subtitle">Ecocresser</h5>
                                                    <div className="entry-content">
                                                        Nos hemos encargado que, en el trascurso del proyecto halla educación ambiental,
                                                        lúdicas de conciencia sostenible, talleres de arte terapia, talleres artísticos y
                                                        capacitaciones empresariales para toda la comunidad, tanto como lo ambiental, social y
                                                        empresarial con una visión ancestral. Nuestro desarrollo del proyecto en la (zona rural)
                                                        Caloto- Cauca, es enfocado en sanación del conflicto con Arte terapia y talleres artísticos,
                                                        desarrollo de eco construcción, seguridad alimentaria y desarrollo técnico agropecuario.

                                                    </div>
                                                </div>
                                                <div className="cl"></div>
                                            </article>
                                            <article className="one_third format-profile">
                                                <div className="pl_img">
                                                    <figure>
                                                        <img width="580" height="390" src={require('./ambiental.jpg')} className="attachment-blog-masonry-thumb size-blog-masonry-thumb wp-post-image"/>
                                                    </figure>
                                                </div>
                                                <div className="pl_content">
                                                    <h2 className="entry-title">
                                                        Campañas Ambientales
                                                    </h2>
                                                    <h5 className="pl_subtitle">Ecocresser</h5>
                                                    <div className="entry-content">
                                                        Nuestras campañas ambientales constan de proyectos en conjunto con la comunidad NASA- PAEZ,
                                                        van desde reforestación de bosques, recuperación de ríos, compartir y recuperación de saberes
                                                        étnicos y ancestrales, permacultura, acuaponia en los hogares de la comunidad; proyectos que
                                                        venimos desarrollando hace 5 años, con la intención de recuperar el legado indígena y mejorar
                                                        la calidad de vida de la comunidad, conexión entre el agro y la sabiduría ancestral.
                                                    </div>
                                                </div>
                                                <div className="cl"></div>
                                            </article>
                                            <article className="one_third format-profile">
                                                <div className="pl_img">
                                                    <figure>
                                                        <img width="580" height="390" src={require('./talleres.jpg')} className="attachment-blog-masonry-thumb size-blog-masonry-thumb wp-post-image"/>
                                                    </figure>
                                                </div>
                                                <div className="pl_content">
                                                    <h2 className="entry-title">
                                                        Talleres Educativos
                                                    </h2>
                                                    <h5 className="pl_subtitle">Ecocresser</h5>
                                                    <div className="entry-content">
                                                        El equipo de trabajo de nuestra ONG, se ha encargado de seleccionar e instruir a
                                                        los mejores talleristas y capacitadores; para esta clase de procesos principalmente,
                                                        porque trabajamos en zonas de conflicto y nuestro objetivo es asegurar su auto sostenibilidad,
                                                        resocialización, herramientas culturales y sociales.
                                                    </div>
                                                </div>
                                                <div className="cl"></div>
                                            </article>
                                            <article className="one_third format-profile">
                                                <div className="pl_img">
                                                    <figure>
                                                        <img width="580" height="390" src={require('./audiovisual.jpg')} className="attachment-blog-masonry-thumb size-blog-masonry-thumb wp-post-image"/>
                                                    </figure>
                                                </div>
                                                <div className="pl_content">
                                                    <h2 className="entry-title">
                                                        Producción Audiovisual
                                                    </h2>
                                                    <h5 className="pl_subtitle">Zorro del Desierto</h5>
                                                    <div className="entry-content">
                                                        Nuestra productora ZORRO DEL DESIERTO PRODUCCIONES respaldo audiovisual con enfoque,
                                                        documental, cronista, argumental de antropología social, crea talleres y capacita a los
                                                        jóvenes involucrados y voluntarios en los proyectos de la plataforma ECO CRESSER con la
                                                        visión de la cinematografía y la antropología, especializados en fotografía profesional,
                                                        montaje y producción cinematográfica, pilar de la asociación.
                                                    </div>
                                                </div>
                                                <div className="cl"></div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;