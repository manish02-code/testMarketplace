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



const Looding=() =>{

    return(
        <div id="preloader">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="object" id="object_one"></div>
                <div class="object" id="object_two"></div>
                <div class="object" id="object_three"></div>
            </div>
        </div>
    </div>
    )
}
export default Looding;