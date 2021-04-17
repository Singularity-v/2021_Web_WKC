import { useState} from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"

const { Option } = Select;


function ProductDetail({product}) {
    const [color, setColor] = useState();

   return (
    <div> 
         {/* className="detail-container" */}
        <Row className=" shop-container " gutter={[32, 32]}>
            <Col  lg={{ span: 11 }} >
            <img
                alt=""
                className="product-top-image"
                src={product.image}
            />
                
            </Col>
            <Col  className="shop-top-right" lg={{span:8, offset:1}} xs={{ span:18 }}>
                <div className="shop-top-right-container">
                    <h2 className="product-name">
                        {product.name}
                    </h2>    
                    <p className="product-author">
                        {product.author}
                    </p>
                    <p>$25.59</p>
                    <p className="product-status">
                        Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                    </p>
                    <p className="product-color">
                        <p> Color</p>
                        {"   "}
                        <Select 
                            defaultValue={color} 
                            placeholder="Select color"
                            className="select-style shop-top-right-container"
                            onChange={val=>setColor(val)}
                            size="large"
                        >
                            {[...Array(product.color.length).keys()].map((x) => (
                                <Option value={product.color[x]}>
                                {product.color[x]}
                                </Option>
                            ))}
                        </Select>
                    </p>
                    <div >
                        <p className="product-qty">
                            <p>QUANTITY </p>
                            {"   "}
                            <Select 
                                defaultValue={product.countInStock > 0 ? 1 : 0} 
                                className="select-style"
                                size="large"
                            >
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                    {x + 1}
                                    </Option>
                                ))}
                            </Select>
                        </p>
                    </div>
                    <AddToCart />
                </div>

            </Col>
        </Row>
        <div className="shop-container">
            <Row className=" shop-top-right " gutter={[32, 32]}>
                <Col lg={{span:20}}>
                    <p className="description">Description</p>
                    <p >{product.description}</p>

                    <li className="product-description.long">{product.descriptionlong1}</li>
                    <li className="product-description.long">{product.descriptionlong2}</li>
                    <li className="product-description.long">{product.descriptionlong3}</li>
                    <li className="product-description.long">{product.descriptionlong4}</li>
                    <li className="product-description.long">{product.descriptionlong5}</li>
                </Col>
            </Row>
        </div>
            <Row className="shop-container related-products" gutter={[32, 32]}>
                <Col lg={{span:1}} >

                    <button type="button" className="related-btn"> <img className="related-arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/related-product-privious.png"/></button>

                </Col>
                <Col className="nop" lg={{span:18}}>
                    <div className="related-products-images">
                        <Col  lg={{span:6}}>
                            <img className="products-image" src={product.detailproduct1}/>
                        </Col>
                        <Col  lg={{span:6}}>
                            <img className="products-image" src={product.detailproduct2}/>
                        </Col>
                        <Col  lg={{span:6}}>
                            <img className="products-image" src={product.detailproduct3}/>
                        </Col>
                        <Col  lg={{span:6}}>
                            <img className="products-image" src={product.detailproduct4}/>
                        </Col>
                    </div> 
                </Col>
                <Col  lg={{span:1}} >
                    <div className="btn2">
                        <button type="button" className="related-btn "> <img className="related-arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/related-product-next.png"/></button>
                    </div>
                       

                </Col>
            </Row>
      </div>
   );
}

export default ProductDetail;