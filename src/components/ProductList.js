import ProductItem from "./ProductItem";
import products from "../json/products.json";
import {Row,Col}from "antd";
export default function ProductList(){
    return(
        
        <div  className="product d-flex row">
           <img className="header-pic"src="https://raw.githubusercontent.com/shakuneko/icon/master/Group%2043.png"/>
              <div  className="product1 d-flex row">
                <div  className="text-center d-flex row flex-column">
                <h5 className="text-black row">Hot Products</h5>
                <p className="d-flex justify-content-end">more...</p>
                </div>
                <div className="row">
                <Row gutter={[32,32]}>
                {products.map(product => (
                    <Col 
                    key={product.id} 
                    sm={{ span: 12 }} 
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 4 }}
                  >
                    <ProductItem  product={product}/>
                    </Col>
                ))}
                </Row>
            </div>
            </div>


       

    </div>
    );
}