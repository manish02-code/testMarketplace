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


const ConnectWallet = ()=>{

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
                                    <h3 className="title">Connect Wallets</h3>
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







                <section className="sell-nfts-inner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title mb-45">
                                    <h2 className="title">Connect Your Wallet <img src="assets/img/icons/title_icon01.png" alt=""/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="sell-nfts-item">
                                    <img src="assets/img/icons/nfts_01.png" alt="" className="icon"/>
                                    <span className="step-count">go step 1</span>
                                    <h5 className="title">Create And Sell</h5>
                                    <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum dolor nsectetur.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="sell-nfts-item">
                                    <img src="assets/img/icons/nfts_02.png" alt="" className="icon"/>
                                    <span className="step-count">go step 2</span>
                                    <h5 className="title">Create Collection</h5>
                                    <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum dolor nsectetur.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="sell-nfts-item">
                                    <img src="assets/img/icons/nfts_03.png" alt="" className="icon"/>
                                    <span className="step-count">go step 3</span>
                                    <h5 className="title">Add Your NFTs</h5>
                                    <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum dolor nsectetur.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="sell-nfts-item">
                                    <img src="assets/img/icons/nfts_04.png" alt="" className="icon"/>
                                    <span className="step-count">go step 4</span>
                                    <h5 className="title">List Them For Sale</h5>
                                    <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum dolor nsectetur.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="sell-nfts-item">
                                    <img src="assets/img/icons/nfts_05.png" alt="" className="icon"/>
                                    <span className="step-count">go step 5</span>
                                    <h5 className="title">List Them For Sale</h5>
                                    <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum dolor nsectetur.</p>
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


export default ConnectWallet;