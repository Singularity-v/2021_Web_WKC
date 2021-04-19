import { Modal, Button, Select } from "antd";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store"
import Cookie from "js-cookie"
import { CartIcon } from "./Icon";
import { addCartItem, removeCartItem, setProductDetail } from "../action";
import { FrownOutlined } from '@ant-design/icons';
const { Option } = Select;

export default function CartModal({ isModalVisible, toggleModal,product }) {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);
   const [color, setColor] = useState();
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   useEffect(()=>{
      Cookie.set("cartItems", JSON.stringify(cartItems));
     }, [cartItems])

   return (
      // <Modal
      //    title="Shopping Bag"
      //    visible="true"
      //    onCancel={handleCancel}
      //    footer={null}
      // >
      <>
      <div className="shopping-container">
            <p className="shopcart">Shop Cart</p>
            <p className="shopping-title-product">PRPDUCT</p>
            <div className="cart-item-title">
               <div className="cart-item-title2">
                  <p className="shopping-item-content">Color</p>
                  <p className="shopping-item-content">Quantity</p>
                  <p className="shopping-item-content">Price</p>
               </div>
            </div>
         </div>
         {cartItems.length === 0 ? (
            <div className="noproduct" >
               <div className="noproduct2">
                  <div className="noproduct-icon"><FrownOutlined  style={{ fontSize: '72px', color: '#426393' }} /></div>
                  <div className="noproduct-word">You Have 0 Items In Your Cart</div>
                  
               </div>
            </div>
            
            
         ) : (
            cartItems.map(item => (
               <div className="shopping-container1">
                  <li key={item.id} className="cart-item">
                     
                     <Link to={`/product/${item.id}`}>
                        <div className="cart-image" onClick={()=>{
                           setProductDetail(dispatch, item.id, item.qty,);
                           handleCancel();
                        }}>
                           <img src={item.image} alt={item.name} />
                        </div>
                     </Link>
                     
                           <div className="cart-item-content">
                              <div className="shopping-name">
                                 <div className="cart-name">{item.name}</div>
                                 <div className="cart-author-name">{item.author}</div>
                              </div>
                           
                              <div className="shopping-content">
                              <div className="shopping-content-color">
                                 {"   "}
                                 <Select 
                                    defaultValue={item.color} 
                                    placeholder="Select color"
                                    className="select-style shop-top-right-container"
                                    onChange={val=>setColor(val)}
                                 >
                              {[...Array(item.color.length).keys()].map((x) => (
                                 <Option value={item.color[x]}>
                                 {item.color[x]}
                                 </Option>
                              ))}
                           </Select>
                              </div>
                              <div  className="shopping-qty">
                                 
                              <div className="product-qty">
                                    {"   "}
                                       <Select
                                          defaultValue={item.qty}
                                          value={item.qty}
                                          className="select-style"
                                          onChange={(qty) => addCartItem(dispatch, item, qty)}
                                       >
                                          {[...Array(item.countInStock).keys()].map((x) => (
                                             <Option key={x + 1} value={x + 1}>
                                                {x + 1}
                                             </Option>
                                          ))}
                                       </Select>
                                    </div>
                              </div>
                              </div>
                              <div className="shopping-content2">
                              <div className="shopping-content-price">
                              <div className="">
                                 
                              </div>
                                 <div className="">
                                    ${item.price * item.qty}
                                    </div>
                              </div>
                              
                                    <div className="cart-item-end">
                                       <div className="cart-item-delete" onClick={() => removeCartItem(dispatch, item.id)}>
                                          x
                                       </div>
                                    </div>
                                 </div>
                              </div>
                     </li>
                  </div>
                  ))
               )}
               <div className="shopping-container2">
                  <div className="cart-total">
                     <div className="cart-total-price-wrap">
                        <div className="cart-total-price-wrap2">
                        <p className="total">TOTAL :</p>
                           <div className="cart-total-price">${getTotalPrice()}</div>
                        </div>
                     </div>
                        <div className="cart-total-botton">
                        <Link to={"/"}>
                           <Button 
                              className="cart-modal-btn-left" type="primary" > 
                              <span>Continue Shopping</span>
                           </Button>
                        </Link>
                        <Button
                           className="cart-modal-btn-right  " type="warning" danger>
                           <span>Checkout</span>
                        </Button>
                        </div>
                     </div>
               </div>
               
               </>
            
   );
}  