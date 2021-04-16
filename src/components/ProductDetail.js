import { useState} from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"

const { Option } = Select;


function ProductDetail({product}) {
    const [color, setColor] = useState();

   return (
       
    <div className="detail-container mt-4">
        <Row className="d-flex justify-content-center m-0"gutter={[32, 32]}>
            <Col className="d-flex align-items-center p-0" lg={{ span: 10 }}>
            <img
                alt=""
                className="product-image"
                src={product.image}
            />
                
            </Col>
            <Col className="d-flex align-items-center " lg={{span:10, offset:1}}>
                <div >
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
                            className="select-style"
                            onChange={val=>setColor(val)}
                        >
                            {[...Array(product.color.length).keys()].map((x) => (
                                <Option value={product.color[x]}>
                                {product.color[x]}
                                </Option>
                            ))}
                        </Select>
                    </p>
                    <div>
                            <p className="product-qty">
                            <p>QUANTITY </p>
                            {"   "}
                            <Select 
                                defaultValue={product.countInStock > 0 ? 1 : 0} 
                                className="select-style"
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
        <div className="detail-container mt-5">
            <Row className="d-flex justify-content-center" gutter={[32, 32]}>
                <Col lg={{span:21}}>
                    <p className="description">Description</p>
                    <p className="mt-3 product-description">{product.description}</p>

                    <p className="product-description.long">{product.descriptionlong1}</p>
                    <p className="product-description.long">{product.descriptionlong2}</p>
                    <p className="product-description.long">{product.descriptionlong3}</p>
                    <p className="product-description.long">{product.descriptionlong4}</p>
                    <p className="product-description.long">{product.descriptionlong5}</p>
                </Col>
            </Row>
        </div>
        <div className="m-4  d-flex flex-direction-row justify-content-space-between related-products">
            <Row className="d-flex justify-content-center p-0 "gutter={[32, 32]}>
                <Col className=" d-flex justify-content-start p-0 " >
                    <section className="arrow pl-0 pr-0  " lg={{span:2}}>
                        <button type="button" className="related-btn1"> <img className="related-arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/related-product-privious.png"/></button>
                    </section>
                </Col>
                <Col className=" m-0 text-left" lg={{span:20}}>
                     <div className="d-flex flex-direction-row">
                         <section className="col  pl-0">
                            <img className="products-image" src={product.detailproduct1}/>
                        </section>
                        <section className="col  pl-0 ">
                            <img className="products-image" src={product.detailproduct2}/>
                        </section>
                        <section className="col  pl-0 ">
                            <img className="products-image" src={product.detailproduct3}/>
                        </section>
                        <section className="col  pl-0 ">
                            <img className="products-image" src={product.detailproduct4}/>
                        </section> 
                    </div> 
                </Col>
                <Col className=" arrow" lg={{span:2}} >
                    <section className="d-flex align-items-center pl-0 pr-0">
                        <button type="button" className="related-btn1"> <img className="related-arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/related-product-next.png"/></button>
                    </section>
                </Col>
            </Row>
        </div>
            
                
            
      </div>
   );
}

export default ProductDetail;