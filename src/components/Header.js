export default function Header() {
    return (
       <div className="header">
          <h1 className="header-title">
             Your Home
          </h1>
 
             <ul className="header-menu d-flex">
                        <li className="menu1"><a>Inspirations</a></li>
                        <li className="menu1"><a >Shop</a></li>
                        <li className="menu1"><a>Designers</a></li>
                        <li className="menu1"><a>About Us</a></li>
                    </ul>
      
                    <div className="header-icon ">
                        <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-search.png"/>
                        <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-account.png"/>
                        <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-cart.png"/> 
                    </div>
       </div>
    );
 }