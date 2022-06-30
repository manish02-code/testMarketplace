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
import web3Handler from "../Homepage/Homepage"

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


const LoginRegister = ()=>{

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
                                    <h3 className="title">Registration & Sign In</h3>
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





                
                <section className="login-welcome-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="login-welcome-wrap">
                                    <div className="login-welcome-content">
                                        <h2 className="title">welcome to NFT Activity</h2>
                                        <p>The top NFTs on Nftmar, ranked by volume, floor price and other <Link to="/LoginRegister">statistics.</Link></p>
                                    </div>
                                    <div className="welcome-rating">
                                        <img src="assets/img/icons/three_star.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="signup-form-wrap">
                                    <h4 className="title">Sign up</h4>
                                    <form action="#">
                                        <div className="form-grp">
                                            <label for="fName">First name</label>
                                            <input type="text" id="fName"/>
                                        </div>
                                        <div className="form-grp">
                                            <label for="lName">Last name</label>
                                            <input type="text" id="lName"/>
                                        </div>
                                        <div className="form-grp">
                                            <label for="email">Email address</label>
                                            <input type="email" id="email"/>
                                        </div>
                                        <div className="form-grp">
                                            <label for="cPassword">Create Password</label>
                                            <input type="password" id="cPassword"/>
                                        </div>
                                        <div className="form-grp">
                                            <label for="rPassword">Re Password</label>
                                            <input type="password" id="rPassword"/>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">Allow to all tearms & condition</label>
                                        </div>
                                        <div className="form-btn-wrap">
                                            <button className="btn signup">sign up</button>
                                            <button className="btn login">log in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="another-way-signup">
                                    <h4 className="title">Another way to sign up</h4>
                                    <p>The top NFTs on Nftmar, ranked by volume, floor price and other.</p>
                                    <ul className="another-way-list">
                                        <li><Link to=""><img src="assets/img/icons/signup_icon01.png" alt=""/>MetaMask <span>Popular</span></Link></li>
                                        <li><Link to="#"><img src="assets/img/icons/signup_icon02.png" alt=""/>Coinbase Wallet</Link></li>
                                        <li><Link to="#"><img src="assets/img/icons/signup_icon03.png" alt=""/>Wallet Connect</Link></li>
                                        <li><Link to="#"><img src="assets/img/icons/signup_icon04.png" alt=""/>Fortmatic</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


























                <Footer/>

            </div>
        </div>
    )
}


export default LoginRegister;