export default function Header(){
    return(
        <header >
            <div className="header">
                <div  className="header-content d-flex row justify-content-between">
                    <h2 className="header-title">
                        YOUR HOME
                    </h2>
                    <ul className="header-menu d-flex row ">
                        <li className="menu1"><a>Inspirations</a></li>
                        <li className="menu1"><a >Shop</a></li>
                        <li className="menu1"><a>Designers</a></li>
                        <li className="menu1"><a>About Us</a></li>
                    </ul>
                    <div className="header-icon ">
                        <img src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-search.png"/>
                        <img src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-account.png"/>
                        <img src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-cart.png"/> 
                    </div>
                    </div>
                    <div>
                </div>
            </div>
               
           
        
    </header>
    );
}