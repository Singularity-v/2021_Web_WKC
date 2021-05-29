import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
// import products from "../json/products.json"
import Cookie from "js-cookie"
import { 
   SET_PAGE_TITLE,
   SET_PAGE_CONTENT,
   SET_NAVBAR_ACTIVEITEM,
   ADD_CART_ITEM,
   REMOVE_CART_ITEM,
   SET_PRODUCT_DETAIL,
 } from "../utils/constants"
 

 export const StoreContext = createContext();
 let cartItems = Cookie.getJSON("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
   allproducts: [],
    page: {
       title: "Your Home",
       product: [],
    },
    navBar: {
      activeItem: "/",
      },
      
   productDetail: {
      product: {
         image:[],
         color:[]
      },
      qty: 1,
      col:'None',
      colNum:0
  },
  cartItems,
//   feedProducts: {
//     loading: false,
//     error: null,
//   },
//   requestProducts: {
//     loading: false,
//     error: null,
//   }
 };
 
 function reducer(state, action) {
    switch (action.type) {
       case SET_PAGE_TITLE:
          return {
             ...state,
             page: {
                ...state.page,
                title: action.payload,
             },
          };
          case SET_PAGE_CONTENT:
            return {
              ...state,
              page: {
                ...state.page,
                ...action.payload
              },
            };
          case SET_NAVBAR_ACTIVEITEM:
            return {
               ...state,
               navBar: {
                  activeItem: action.payload
               }
            };

            case ADD_CART_ITEM:
               const item = action.payload;
               const product = state.cartItems.find((x) => x.id === item.id);
               if (product) {
                  cartItems = state.cartItems.map((x) =>
                      x.id === product.id ? item : x
                   );
                  return { ...state, cartItems };
               }
               cartItems = [...state.cartItems, item];
               return { ...state, cartItems };
            case REMOVE_CART_ITEM:
                cartItems = state.cartItems.filter((x) => x.id !== action.payload);
               return { ...state, cartItems };
            case SET_PRODUCT_DETAIL:
               return { ...state, productDetail: { ...state.productDetail, ...action.payload} };
            default:
               return state;
          }
       }
export function StoreProvider(props) {
   const [state, dispatch] = useReducerWithThunk(
      reducer,
      initialState,
      "example"
    );
    const value = { state, dispatch };

   return (
      <StoreContext.Provider value={value}>
         {props.children}
      </StoreContext.Provider>
   );
 }