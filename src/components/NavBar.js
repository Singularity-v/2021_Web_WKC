  
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'antd';

export default function NavBar({isOnTouch})    {
    
    const [OnTouch,setOnTouch]=useState(true);
    const [hamopen,sethamopen]=useState("nav-bar");
    const change=()=>{
          setOnTouch(!OnTouch);
          console.log(OnTouch);
          if(OnTouch){
            console.log('open')
            sethamopen("nav-bar-ham");
            }
          else{
            console.log('close')
            sethamopen("nav-bar");
            }
    }
    
    return (
      <>
        <div className="collapse-mobile-wrap">
            <Button className="ham-bt" 
                    icon="menu"
                    type="primary"
                    onClick={change}>
            </Button>
            
        </div>
        <div className={hamopen} >
            <div className="header-menu">
                <div className="header-word">
                    <NavLink to="/inspirations" className="menu1" activeClassName="menu1--active">
                        Inspirations
                    </NavLink>
                    <NavLink to="/shop" className="menu1" activeClassName="menu1--active">
                        Shop
                    </NavLink>
                    <NavLink to="/designers" className="menu1" activeClassName="menu1--active">
                        Designers
                    </NavLink>
                    <NavLink to="/about-Us" className="menu1" activeClassName="menu1--active">
                        About Us
                    </NavLink>
                </div>
                <div className=" header-icon ">
                    <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-search.png"/>
                    <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-account.png"/>
                    <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-cart.png"/> 
                </div>
            </div>

           
            
        </div>
      </>
    );
}
// import { useState } from "react";
// import { Drawer } from "antd";
// import NavItem from "./NavItem";
// import HamMenu from "./HamMenu";

// export default function NavBar() {
//     const [isOnTouch, setIsOnTouch] = useState(false);
//     const handleCloseDrawer = () => setIsOnTouch(false);
//     return (
//         <div>
//             <HamMenu
//                 onClick={() => setIsOnTouch(!isOnTouch)}
//                 isOnTouch={isOnTouch}
//             />
//             <div className="nav-bar collapse-mobile">
//                 <NavItem to="/inspirstopns" className="nav-item" activeClassName="nav-item--active">
//                 inspirstopns
//                 </NavItem>
//                 <NavItem to="/shop" className="nav-item" activeClassName="nav-item--active">
//                     Shop
//                 </NavItem>
//                 <NavItem to="/designers" className="nav-item" activeClassName="nav-item--active">
//                     Designers
//                 </NavItem>
//                 <NavItem to="/about-us" className="nav-item" activeClassName="nav-item--active">
//                     About Us
//                 </NavItem>

//             </div>
//             <Drawer
//                 title=" "
//                 placement={"left"}
//                 closable={false}
//                 onClose={handleCloseDrawer}
//                 visible={isOnTouch}
//                 key={"left"}
//                 width={400}
//                 zIndex={99}
//                 bodyStyle={{ backgroundColor: "#111828" }}
//                 headerStyle={{ backgroundColor: "#111828", color: "#fff" }}
//             >
//                 <NavItem to="/inspirstopns" className="nav-item" activeClassName="nav-item--active">
//                 inspirstopns
//                 </NavItem>
//                 <NavItem to="/shop" className="nav-item" activeClassName="nav-item--active">
//                     Shop
//                 </NavItem>
//                 <NavItem to="/designers" className="nav-item" activeClassName="nav-item--active">
//                     Designers
//                 </NavItem>
//                 <NavItem to="/about-us" className="nav-item" activeClassName="nav-item--active">
//                     About Us
//                 </NavItem>
//             </Drawer>
//         </div>
//     );
// }