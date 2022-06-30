//////////////////////////////////////////////////////////////////////////////////////////////
/////IMPORTING ALL CSS

// import "../../Pages/assets/css/style.css";
// import "../../Pages/assets/css/bootstrap.min.css"
// import "../../Pages/assets/css/default.css"
// import "../../Pages/assets/css/flaticon.css"
// import "../../Pages/assets/css/fontawesome-all.min.css"
// import "../../Pages/assets/css/jquery.mCustomScrollbar.min.css"
// import "../../Pages/assets/css/magnific-popup.css"
// import "../../Pages/assets/css/responsive.css"
// import "../../Pages/assets/css/slick.css"
// import "../../Pages/assets/css/uicons-solid-rounded.css"
// import "../../Pages/assets/css/animate.min.css"
/////////////////////////////////////////////////////////////////////////////////////////////
import Sidebar from "../../components/Side_Menu_Bar/side_menu_bar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Offcanvas from "../../components/Off_canvas/off_canvas";

////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";


//////////////////////////////////////////////////////////////////

const Collection = ()=>{

    return(

        <div className='Main'> 
        <Header/>
        <Sidebar/>
        <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="breadcrumb-content text-center">
                                    <h3 className="title">Top collections</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="category-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul className="category-list">
                                    <li className="active"><Link to="/Homepage"><img src="assets/img/icons/cat_001.png" alt=""/> All</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_01.png" alt=""/> Games</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_02.png" alt=""/> Art</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_03.png" alt=""/> Trading Cards</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_04.png" alt=""/> Music</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_05.png" alt=""/> Domain Names</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_06.png" alt=""/> Memes</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_07.png" alt=""/> Collectibles</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="inner-week-features-area">
                    <div className="container">
                        <div className="row mb-35">
                            <div className="col-md-7 col-sm-8">
                                <div className="section-title">
                                    <h2 className="title">Browse by Category <img src="assets/img/icons/title_icon02.png" alt=""/></h2>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-4">
                                <div className="section-button text-end">
                                    <Link to="/NFTMarketPlace" className="btn filter-btn"><i className="fi-sr-filter"></i> Explore More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <Link to="/AuthorProfile"><img src="assets/img/others/features_avatar.png" alt=""/></Link>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><Link to="/NFTMarketPlace">Colorful Abstract</Link></h5>
                                                <span>Created by <Link to="/AuthorProfile">Jonson</Link></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <Link to="#">100</Link>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><img src="assets/img/others/features_img01.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img03.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img04.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <Link to="/AuthorProfile"><img src="assets/img/others/features_avatar02.png" alt=""/></Link>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><Link to="/NFTMarketPlace">Deploy Abstract</Link></h5>
                                                <span>Created by <Link to="/AuthorProfile">Jonson</Link></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <Link to="#">300</Link>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><img src="assets/img/others/s_features_img01.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/s_features_img03.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/s_features_img04.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <Link to="/AuthorProfile"><img src="assets/img/others/features_avatar03.png" alt=""/></Link>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><Link to="/NFTMarketPlace">Darkness Abstract</Link></h5>
                                                <span>Created by <Link to="/AuthorProfile">Jonson</Link></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <Link to="#">190</Link>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><img src="assets/img/others/t_features_img01.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img03.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/t_features_img04.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <Link to="/AuthorProfile"><img src="assets/img/others/features_avatar04.png" alt=""/></Link>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><Link to="/NFTMarketPlace">Design Abstract</Link></h5>
                                                <span>Created by <Link to="/AuthorProfile">Jonson</Link></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <Link to="#">100</Link>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><img src="assets/img/others/f_features_img01.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/s_features_img03.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/f_features_img04.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <Link to="/AuthorProfile"><img src="assets/img/others/features_avatar05.png" alt=""/></Link>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><Link to="/NFTMarketPlace">Funny Abstract</Link></h5>
                                                <span>Created by <Link to="/AuthorProfile">Jonson</Link></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <Link to="#">300</Link>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><img src="assets/img/others/features_img_01.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img03.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/s_features_img04.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <Link to="/AuthorProfile"><img src="assets/img/others/features_avatar.png" alt=""/></Link>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><Link to="/NFTMarketPlace">Colorful Abstract</Link></h5>
                                                <span>Created by <Link to="/AuthorProfile">Jonson</Link></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <Link to="#">190</Link>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><img src="assets/img/others/features_img01.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/s_features_img03.png" alt=""/></li>
                                        <li className="grid-item"><img src="assets/img/others/t_features_img04.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        





        <Footer />

        </div>
    )
}


export default Collection;