////////////////////////////////////////////////////////////////////////////////////////////
//////////// IMPORTING  FILES
import Sidebar from "../../components/Side_Menu_Bar/side_menu_bar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Offcanvas from "../../components/Off_canvas/off_canvas";
import FeaturesOFtheWeek from "../../components/Features of the week/Features_of_the_week";
///////////////////////////////////////////////////////////////////////////////////////
//////// IMPORTING MODULES
import { Link } from "react-router-dom";

//////////////////////////////////////////////////////////////////////////////////////////////
/////IMPORTING ALL CSS

import "../../Pages/assets/css/style.css";
import "../../Pages/assets/css/bootstrap.min.css"
import "../../Pages/assets/css/default.css"
import "../../Pages/assets/css/flaticon.css"
import "../../Pages/assets/css/fontawesome-all.min.css"
import "../../Pages/assets/css/jquery.mCustomScrollbar.min.css"
import "../../Pages/assets/css/magnific-popup.css"
import "../../Pages/assets/css/responsive.css"
import "../../Pages/assets/css/slick.css"
import "../../Pages/assets/css/uicons-solid-rounded.css"
import "../../Pages/assets/css/animate.min.css"
/////////////////////////////////////////////////////////////////////////////////////////////



const Blog = ()=>{

    return(

        <div>
           <div id='Main_Container'>
            <Sidebar/>
            <Header/>



            <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="breadcrumb-content text-center">
                                    <h3 className="title">Latest News</h3>
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







                <div className="blog-area pt-80 pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-9 col-lg-8">
                                <div className="standard-blog-item mb-40">
                                    <div className="blog-thumb">
                                        <Link to="/BlogDitails"><img src="assets/img/blog/blog_thumb01.png" alt=""/></Link>
                                    </div>
                                    <div className="standard-blog-content">
                                        <ul className="standard-blog-meta">
                                            <li><Link to="#"><i className="flaticon-supermarket"></i>NFT Marketplace</Link></li>
                                            <li><Link to="#"><i className="flaticon-avatar"></i>Admin</Link></li>
                                            <li><Link to="#"><i className="flaticon-calendar"></i>Mar 10, 2022</Link></li>
                                        </ul>
                                        <h4 className="title"><Link to="/BlogDitails">Marketplace is the online shop for the video</Link></h4>
                                        <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.</p>
                                        <div className="blog-line"></div>
                                        <ul className="blog-post-bottom">
                                            <li className="read-more"><Link to="/BlogDitails" className="btn">Read more</Link></li>
                                            <li className="share"><a className="dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><i className="fas fa-share-alt"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-discord"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="standard-blog-item mb-40">
                                    <div className="blog-thumb">
                                        <Link to="/BlogDitails"><img src="assets/img/blog/blog_thumb02.png" alt=""/></Link>
                                    </div>
                                    <div className="standard-blog-content">
                                        <ul className="standard-blog-meta">
                                            <li><Link to="#"><i className="flaticon-supermarket"></i>NFT Marketplace</Link></li>
                                            <li><Link to="#"><i className="flaticon-avatar"></i>Admin</Link></li>
                                            <li><Link to="#"><i className="flaticon-calendar"></i>Mar 10, 2022</Link></li>
                                        </ul>
                                        <h4 className="title"><Link to="/BlogDitails">Marketplace is the online shop for the video</Link></h4>
                                        <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.</p>
                                        <div className="blog-line"></div>
                                        <ul className="blog-post-bottom">
                                            <li className="read-more"><Link to="/BlogDitails" className="btn">Read more</Link></li>
                                            <li className="share"><a className="dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><i className="fas fa-share-alt"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-discord"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="standard-blog-item mb-40">
                                    <div className="blog-thumb">
                                        <Link to="/BlogDitails"><img src="assets/img/blog/blog_thumb03.png" alt=""/></Link>
                                    </div>
                                    <div className="standard-blog-content">
                                        <ul className="standard-blog-meta">
                                            <li><Link to="#"><i className="flaticon-supermarket"></i>NFT Marketplace</Link></li>
                                            <li><Link to="#"><i className="flaticon-avatar"></i>Admin</Link></li>
                                            <li><Link to="#"><i className="flaticon-calendar"></i>Mar 10, 2022</Link></li>
                                        </ul>
                                        <h4 className="title"><Link to="/BlogDitails">Marketplace is the online shop for the video</Link></h4>
                                        <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.</p>
                                        <div className="blog-line"></div>
                                        <ul className="blog-post-bottom">
                                            <li className="read-more"><Link to="/BlogDitails" className="btn">Read more</Link></li>
                                            <li className="share"><a className="dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><i className="fas fa-share-alt"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-discord"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4">
                                <aside className="blog-sidebar">
                                    <div className="widget">
                                        <h4 className="sidebar-title">Search</h4>
                                        <div className="sidebar-search">
                                            <form action="#">
                                                <input type="text" placeholder="Search ..."/>
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h4 className="sidebar-title">Categories</h4>
                                        <div className="sidebar-cat-list">
                                            <ul>
                                                <li><Link to="#">Domain Names <i className="fas fa-angle-double-right"></i></Link></li>
                                                <li><Link to="#">Photography <i className="fas fa-angle-double-right"></i></Link></li>
                                                <li><Link to="#">Coinbase <i className="fas fa-angle-double-right"></i></Link></li>
                                                <li><Link to="#">Trading Cards <i className="fas fa-angle-double-right"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h4 className="sidebar-title">Recent Post</h4>
                                        <div className="rc-post-list">
                                            <ul>
                                                <li>
                                                    <div className="rc-post-thumb">
                                                        <Link to="/BlogDitails"><img src="assets/img/blog/rc_post_thumb01.jpg" alt=""/></Link>
                                                    </div>
                                                    <div className="rc-post-content">
                                                        <ul className="standard-blog-meta">
                                                            <li><Link to="#"><i className="flaticon-avatar"></i>Admin</Link></li>
                                                            <li><Link to="#"><i className="flaticon-calendar"></i>Mar 10, 2022</Link></li>
                                                        </ul>
                                                        <h5 className="title"><Link to="/BlogDitails">Marketplace is the online shop for the video</Link></h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="rc-post-thumb">
                                                        <Link to="/BlogDitails"><img src="assets/img/blog/rc_post_thumb02.jpg" alt=""/></Link>
                                                    </div>
                                                    <div className="rc-post-content">
                                                        <ul className="standard-blog-meta">
                                                            <li><Link to="#"><i className="flaticon-avatar"></i>Admin</Link></li>
                                                            <li><Link to="#"><i className="flaticon-calendar"></i>Mar 10, 2022</Link></li>
                                                        </ul>
                                                        <h5 className="title"><Link to="/BlogDitails">Marketplace is the online shop for the video</Link></h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>














            <Footer/>
           </div>
        </div>
    )
}


export default Blog;