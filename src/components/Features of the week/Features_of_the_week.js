//////////////////////////////////////////////////////////////////////////////////////////////
/////IMPORTING ALL CSS
import "../../Pages/assets/css/uicons-solid-rounded.css"
import "../../Pages/assets/css/bootstrap.min.css"
 import "../../Pages/assets/css/default.css"
 import "../../Pages/assets/css/flaticon.css"
 import "../../Pages/assets/css/fontawesome-all.min.css"
import "../../Pages/assets/css/jquery.mCustomScrollbar.min.css" 
 import "../../Pages/assets/css/magnific-popup.css"
import "../../Pages/assets/css/responsive.css"
 import "../../Pages/assets/css/slick.css"
import "../../Pages/assets/css/style.css"
import "../../Pages/assets/css/animate.min.css"

/////////////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom"



const FeaturesOFtheWeek=()=>{


    return(

        <div class="inner-week-features-area">
        <div class="container">
            <div class="row mb-35">
                <div class="col-md-7 col-sm-8">
                    <div class="section-title">
                        <h2 class="title">Features of the week <img src="assets/img/icons/title_icon02.png" alt=""/></h2>
                    </div>
                </div>
                <div class="col-md-5 col-sm-4">
                    <div class="section-button text-end">
                        <Link to="#" class="btn filter-btn"><i class="fi-sr-filter"></i> Explore More</Link>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-5">
                    <div class="week-features-item">
                        <div class="features-item-top">
                            <div class="features-avatar">
                                <div class="features-avatar-thumb">
                                    <Link to="#"><img src="assets/img/others/features_avatar.png" alt=""/></Link>
                                </div>
                                <div class="features-avatar-info">
                                    <h5 class="title"><Link to="#">Random Abstract</Link></h5>
                                    <span>Created by <Link to="#">Peolu</Link></span>
                                </div>
                            </div>
                            <div class="features-item-wishlist">
                                <Link to="#">100</Link>
                            </div>
                        </div>
                        <ul class="features-img-wrap">
                            <li class="grid-item"><img src="assets/img/others/features_img01.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/features_img03.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/features_img04.png" alt=""/></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="week-features-item">
                        <div class="features-item-top">
                            <div class="features-avatar">
                                <div class="features-avatar-thumb">
                                    <Link to="#"><img src="assets/img/others/features_avatar02.png" alt=""/></Link>
                                </div>
                                <div class="features-avatar-info">
                                    <h5 class="title"><Link to="#">Deploy Abstract</Link></h5>
                                    <span>Created by <Link to="#">Darkleo</Link></span>
                                </div>
                            </div>
                            <div class="features-item-wishlist">
                                <Link to="#">300</Link>
                            </div>
                        </div>
                        <ul class="features-img-wrap">
                            <li class="grid-item"><img src="assets/img/others/s_features_img01.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/s_features_img03.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/s_features_img04.png" alt=""/></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="week-features-item">
                        <div class="features-item-top">
                            <div class="features-avatar">
                                <div class="features-avatar-thumb">
                                    <Link to="#"><img src="assets/img/others/features_avatar03.png" alt=""/></Link>
                                </div>
                                <div class="features-avatar-info">
                                    <h5 class="title"><Link to="#">Colorful Abstract</Link></h5>
                                    <span>Created by <Link to="#">Jonson</Link></span>
                                </div>
                            </div>
                            <div class="features-item-wishlist">
                                <Link to="#">190</Link>
                            </div>
                        </div>
                        <ul class="features-img-wrap">
                            <li class="grid-item"><img src="assets/img/others/t_features_img01.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/features_img02.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/features_img03.png" alt=""/></li>
                            <li class="grid-item"><img src="assets/img/others/t_features_img04.png" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default FeaturesOFtheWeek;