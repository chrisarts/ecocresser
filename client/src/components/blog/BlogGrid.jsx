import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getArticleList } from '../../actions/articleActions';
import dateFormat from 'dateformat';
import Helmet from 'react-helmet';

class BlogGrid extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        let This = this;
        This.props.getArticleList().then(result => {
            This.setState({
                articles: result.data.articles
            });
        });
    }

    render(){
        return(
            <div>
                <Helmet
                    title="Blog"
                    titleTemplate="Cresser - %s"
                    defaultTitle="Cresser"
                    base={{target: "_blank", href: document.URL}}
                    meta={[
                        {name: "description", content: "Blog Cresser"},
                        {property: "og:type", content: "article"},
                        {property: "og:title", content: "Blog Cresser"},
                        {property: "og:url", content: `http://cresser.org/blog`},
                        {property: "og:image", content: `http://cresser.org/images/metadata/blog.jpg`},
                    ]}
                    link={[
                        {rel: "canonical", href: "http://cresser.org/blog"}
                    ]}
                    onChangeClientState={(newState) => console.log(newState)}
                />
                <div className="headline cmsms_color_scheme_first">
                    <div className="headline_outer">
                        <div className="headline_color"></div>
                        <div className="headline_inner align_center">
                            <div className="headline_aligner"></div>
                            <div className="headline_text headline_subtitle">
                                <h1 className="entry-title">Blog</h1>
                                <h5>General</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle_inner">
                    <section className="content_wrap r_sidebar">
                        <div className="content entry" role="main">
                            <div id="cmsms_row_58a348143ec3c" className="cmsms_row cmsms_color_scheme_default">
                                <div className="cmsms_row_outer_parent">
                                    <div className="cmsms_row_outer">
                                        <div className="cmsms_row_inner">
                                            <div className="cmsms_row_margin cmsms_11">
                                                <div className="cmsms_column one_first">
                                                    <div className="cmsms_wrap_blog entry-summary" id="blog_58a348143eeaf">
                                                        <div className="blog standard">
                                                            {
                                                                this.state.articles.map(article => {
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
                                                                        <article key={article.id}
                                                                                 className="cmsms_default_type post type-post status-publish format-standard has-post-thumbnail hentry category-ecology category-home">
                                                                            <div className="cmsms_post_info entry-meta">
                                                                                <span className="cmsms_post_format_img  cmsms-icon-desktop-3"></span>

                                                                                <abbr className="published cmsms_post_date" title="July 20, 2014">
                                                                                    <span className="cmsms_day_mon">{dateFormat(article.created_at, 'dd')}.{dateFormat(article.created_at, 'mm')}</span>
                                                                                    <span className="cmsms_year">{dateFormat(article.created_at, 'yyyy')}</span>
                                                                                </abbr>
                                                                            </div>
                                                                            <div className="cmsms_post_cont">
                                                                                <figure>
                                                                                    <a href={"/article/"+article.title.replace(' ','-')+'/'+article.id}
                                                                                       title={article.title} className="cmsms_img_link preloader">
                                                                                        <img
                                                                                            width="820"
                                                                                            src={image}
                                                                                            className="wp-post-image"/>
                                                                                    </a>
                                                                                </figure>
                                                                                <header className="cmsms_post_header entry-header">
                                                                                    <h1 className="cmsms_post_title entry-title">
                                                                                        <a href="http://eco-nature.cmsmasters.net/blog/2014/07/20/ozone-layer/">
                                                                                            {article.title}
                                                                                        </a>
                                                                                    </h1>
                                                                                </header>
                                                                                <div className="cmsms_post_cont_info entry-meta">
                                                                                    <span className="cmsms_post_user_name">
                                                                                        Por:
                                                                                        <a href="/" title="Posts by backdoor" className="vcard author">
                                                                                            <span className="fn" rel="author">Admin Cresser</span>
                                                                                        </a>
                                                                                    </span>
                                                                                    <span className="cmsms_post_category">
                                                                                        En:
                                                                                        <a href="/" rel="category tag">{article.category}</a>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="cmsms_post_content entry-content"></div>
                                                                                <footer className="cmsms_post_footer entry-meta">
                                                                                    <a className="button cmsms_post_read_more" href="/">Leer Más</a>
                                                                                </footer>
                                                                            </div>
                                                                        </article>
                                                                    )
                                                                })
                                                            }

                                                        </div><div className="cmsms_wrap_more_posts"></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cl"></div>
                        </div>
                        <div className="sidebar" role="complementary">
                            <aside id="search-2" className="widget widget_search">
                                <div className="search_bar_wrap">
                                    <form method="get" action="http://eco-nature.cmsmasters.net">
                                        <p>
                                            <input name="s" placeholder="enter keywords" value="" type="text"/>
                                            <button type="submit" className="cmsms-icon-search-7"></button>
                                        </p>
                                    </form>
                                </div>
                            </aside>
                            <aside id="recent-posts-2" className="widget widget_recent_entries">
                                <h3 className="widgettitle">Categorías</h3>
                                <ul>
                                    <li>
                                        <Link to={'/blog/category/eco-cresser'}>ECO CRESSER</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blog/category/akash'}>AKASH</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blog/category/gato-psicodelia'}>GATO PSICODELIA</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blog/category/se-dice-en-la-montana'}>SE DICE EN LA MONTAÑA</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blog/category/roncitos-y-porritos'}>RONCITOS Y PORRITOS</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blog/category/encuentro-nomada'}>ENCUENTRO NOMADA</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blog/category/zorro-del-desierto'}>ZORRO DEL DESIERTO</Link>
                                    </li>
                                </ul>
                            </aside>
                            <aside id="paypal_donations-11" className="widget widget_custom_paypal_donations">
                                <div className="cmsms_paypal_donations_widget">
                                    <h3 className="widgettitle">Donaciones</h3>
                                    <p>
                                        Si estás interesado en nuestra causa no olvides contáctarnos: <a href="mailto:example@econature.com">asocresserltda@gmail.com</a>
                                    </p>

                                    <div className="cmsms_paypal_donations">

                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                            <div className="paypal-donations">
                                                <input type="hidden" name="cmd" value="_donations"/>
                                                <input type="hidden" name="bn" value="TipsandTricks_SP"/>
                                                <input type="hidden" name="business" value="test@test.com"/>
                                                <input type="hidden" name="item_name" value="test purpose 2332"/>
                                                <input type="hidden" name="item_number" value="test reference 2323"/>
                                                <input type="hidden" name="amount" value="2335"/>
                                                <input type="hidden" name="rm" value="0"/>
                                                <input type="hidden" name="currency_code" value="USD"/>
                                                <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online."/>
                                                <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </div>
                                        </form>

                                        <span className="button">Donar Ahora!</span>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

getArticleList.PropTypes = {
    getArticleList: React.PropTypes.func.isRequired
};

export default connect(null, { getArticleList })(BlogGrid);