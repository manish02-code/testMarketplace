////////////////////////////////////////////////////////////////////////////////
//////////////////// IMPORTID CSS///
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
///////////////////////////////////////////////////////////////////////////////



import { Link } from "react-router-dom"




const Sidebar = () => {
   


                    


    return (
        <div className='sidebar'>
            <div className="sidebar-logo mb-25">
                <Link to="/Homepage"><img src='assets/img/logo/logo.png' /></Link>
            </div>
            <div className='sidebar-icon'>
                <ul>
                    <li class="active"><Link to="/Homepage" ><i class="fi-sr-apps-delete"></i></Link></li>
                    <li><Link to="/LiveNFTBiddind" ><i class="fi-sr-book-alt"></i></Link></li>
                    <li><Link to="/collection"><i class="fi-sr-butterfly"></i></Link></li>
                    <li><Link to="/CreateItem"><i class="fi-sr-camping"></i></Link></li>
                    <li><Link to="/Category"><i class="fi-sr-crown"></i></Link></li>
                    <li><a href="#"><i class="fi-sr-settings"></i></a></li>
                    <li><Link to="#" id="btnFullscreen"><i class="fi-sr-tool-marquee"></i></Link></li>
                </ul>
            </div>


        </div>
        //////////////////////////////////////////////////////////////////////////////////////////////////////


        //////////////////////////////////////////////////////////////////////////////////////////////////////
    )
}

export default Sidebar;