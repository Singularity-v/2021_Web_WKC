import { useContext,useEffect } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import CartModel from "../components/CartModal"
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Shopping() {
   
  return (
    <div>
    <Layout className="container main-layout">
        
            <Header className="layout-header">
            <AppHeader title="Your Home" />
            </Header>
            <Content classNmae="layout-content">
              <CartModel/>  
            </Content>
        </Layout> 
        <Layout>
        <Footer className="layout-footer">
            <AppFooter />
        </Footer>
        </Layout>
    </div>
  );
}

export default Shopping;