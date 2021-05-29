import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";

import products from "../json/products.json";
// import inspirations from "../json/inspirations.json";
// import shop from "../json/shop.json";
// import designers from "../json/designers.json";
// import aboutus from "../json/about-us";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

// REFERENCE PRODUCTS
const productsCollectionRef = firebase.firestore().collection("product");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allproducts");

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}


export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allproducts";
  console.log(collectionName)
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "allproducts")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await allProductsCollectionRef.where("name", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

// export const getJSON = (url) => {
//   switch (url) {
//     case "/":
//       return products;
//     case "/inspirations":
//       return inspirations;
//     case "/shop":
//       return shop;
//     case "/designers":
//       return designers;
//     case "/about-us":
//       return aboutus;
//     default:
//       return products;
//   }
// };

export const feedProducts = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};
