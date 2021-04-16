import { Row, Col } from "antd";
export default function Footer(){
    return(
      
        <footer className="footer d-flex row flex-column ">
        <div className="footer-up p-4 m-0 ">
            <div className="subscribe p-4 ">
                <h5 className="subscribe-title">GET OUR NEWSLETTER</h5>
                <p className="subscribe-subtitle">Sign up now for designs and inspiration.</p>
                <div className="box">
                    <div class="subscribe-box">
                        <input type="search" id="search" placeholder="Enter Your Email" />
                        <button  type="button" class="subscribe-btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>  

        <div className="footer-down p-4 m-0 ">
            <h4 className="header-title">Your Home</h4>
            <p className="header-title">have a nice day.</p>   
            <div className="footer-icon ">
                        <img className="ig" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-search.png"/>
                        <img className="ig" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-account.png"/>
                        <img className="ig" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-cart.png"/> 
                        <img className="ig" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-cart.png"/> 
                    </div>        
        </div>
    </footer> 
    
         
    );
}