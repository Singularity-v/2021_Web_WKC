import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" >
          <NavLink to="/inspirations" className="menu1" activeClassName="menu1--active">
            Inspirations
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
          <NavLink to="/shop" className="menu1" activeClassName="menu1--active">
                Shop
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
          <NavLink to="/designers" className="menu1" activeClassName="menu1--active">
                Designers
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
          <NavLink to="/about-Us" className="menu1" activeClassName="menu1--active">
                About Us
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5">
          <NavLink to="/search" className="menu1" activeClassName="menu1--active">
                <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-search.png"/>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="6">
          <NavLink to="/account" className="menu1" activeClassName="menu1--active">
                <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-account.png"/>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="7">
          <NavLink to="/cart" className="menu1" activeClassName="menu1--active">
                <img className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-cart.png"/> 
            </NavLink>
          </Menu.Item>
        </Menu>
        
      </div>
    );
  }
}


export default App;

// export default function HamMenu({onClick, isOnTouch}) {
//     return (
//        <>
//           {isOnTouch ? (
//              <span onClick={onClick} className="ham-menu show-mobile">
//                 <span className="ham-menu-bar1 ham-menu-bar1--touch"></span>
//                 <span className="ham-menu-bar2 ham-menu-bar2--touch"></span>
//                 <span className="ham-menu-bar3 ham-menu-bar3--touch"></span>
//              </span>
//           ):(
//              <span onClick={onClick} className="ham-menu show-mobile">
//                 <span className="ham-menu-bar1"></span>
//                 <span className="ham-menu-bar2"></span>
//                 <span className="ham-menu-bar3"></span>
//              </span>
//           )}
//        </>
//     );
//  }