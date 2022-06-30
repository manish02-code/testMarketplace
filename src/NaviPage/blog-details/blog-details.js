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



const BlogDitails = ()=>{

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
                                    <h3 className="title">News Details</h3>
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
                                    <li className="active"><Link to="index.html"><img src="assets/img/icons/cat_001.png" alt=""/> All</Link></li>
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
            


                <div className="blog-details-area pt-80 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-9 col-lg-8">
                                <div className="standard-blog-item blog-details-content">
                                    <div className="blog-thumb">
                                        <img src="assets/img/blog/blog_thumb01.png" alt=""/>
                                    </div>
                                    <div className="standard-blog-content">
                                        <ul className="standard-blog-meta">
                                            <li><Link to="#"><i className="flaticon-supermarket"></i>NFT Marketplace</Link></li>
                                            <li><Link to="#"><i className="flaticon-avatar"></i>Admin</Link></li>
                                            <li><Link to="#"><i className="flaticon-calendar"></i>Mar 10, 2022</Link></li>
                                        </ul>
                                        <h4 className="title">Marketplace is the online shop for the video</h4>
                                        <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        <p>Dallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.</p>
                                        <blockquote>
                                            “ Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes “
                                            <footer>jon Bernthal</footer>
                                        </blockquote>
                                        <p>Mallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        <h4 className="small-title">The online shop for the video</h4>
                                        <p>Gallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.</p>
                                        <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        <div className="blog-line"></div>
                                        <div className="blog-details-bottom">
                                            <div className="blog-details-tags">
                                                <ul>
                                                    <li className="title">Tags :</li>
                                                    <li><Link to="#">Business,</Link></li>
                                                    <li><Link to="#">Work,</Link></li>
                                                    <li><Link to="#">Knowledge,</Link></li>
                                                    <li><Link to="#">Online</Link></li>
                                                </ul>
                                            </div>
                                            <div className="blog-details-social">
                                                <ul>
                                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="avatar-post mt-50 mb-50">
                                    <div className="post-avatar-img">
                                        <img src="assets/img/blog/post_avatar_img.png" alt="img"/>
                                    </div>
                                    <div className="post-avatar-content">
                                        <h5>Thomas Herlihy</h5>
                                        <p>Non-core vaccines are given dependng on the dog's exposure risk. These include vaccines against Bordetella.
                                        </p>
                                        <ul className="post-avatar-social">
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-next-prev">
                                    <ul>
                                        <li className="blog-prev">
                                            <Link to="#"><img src="assets/img/icons/left_arrow.png" alt="img"/>Previous Post</Link>
                                        </li>
                                        <li className="blog-next">
                                            <Link to="#">Next Post<img src="assets/img/icons/right_arrow.png" alt="img"/></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-reply-box">
                                    <h5 className="title">Leave a Reply</h5>
                                    <form action="#" className="comment-reply-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" placeholder="Author *"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="email" placeholder="Your Email *"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <textarea name="message" placeholder="Type Comment Here..."></textarea>
                                        </div>
                                        <button type="submit" className="btn">Submit now</button>
                                    </form>
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


export default BlogDitails;