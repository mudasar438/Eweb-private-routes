// import Images from "./images/Images";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { product } from "prelude-ls";

// when click on add to cart button then add that specific  product id in local storage
function Section() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);  
    
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProduct(data);
        console.log(data);
        console.log(data.title);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  const addToCart = () => {
    const cart = [];
    const addProduct = (products) => {
      const productExists = cart.find((p) => p.id === products.id);
      if (productExists) {
        productExists.quantity += 1;
      } else {
        cart.push({ ...products, quantity: 1 });
      }
    }
    addProduct(products);
    setCart(cart);
    setCartTotalQuantity(cartTotalQuantity + 1);
    setCartTotalPrice(cartTotalPrice + products.price);
    console.log(cart);
    console.log(cartTotalQuantity);
    console.log(cartTotalPrice);
    addProducttoStorage();
  }
  const addProducttoStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("deteilscart", cart);
  }
  // push cart into array and save it in local storage
// const addProducttoStorage = () => {
//     const data = [];
//     data.push(cart);
//     localStorage.setItem("cart", JSON.stringify(data));
    
  return (<div className="max-w-screen-2xl mx-auto bg-slate-500 text-white">
    <div className="flex justify-center w-[90%] mx-auto h-[100vh]">
      <div className="">
        <div className="image mt-5">
          <img
            src={products.images}
            width="400"
           
            alt=""
            className="Images rounded-md"
          />
        </div>
        <div className="">
         
          <h2 className="text-3xl font-bold mt-5">{products.title}</h2>
          <p className="w-[55%] my-3 text-sm ">{products.description}</p>
          <div className="Discount text-3xl">
            <span className="text-blue-900 font-bold">${products.price}</span>
          </div>
          <div className="roola">
           
         
          <button onClick={() => addToCart()} className="p-2 my-2 text-2xl font-bold w-[50%] text-white bg-gray-700">Add to Cart</button>
          {/* <button onClick={() => addProducttoStorage()} className="py-5 text-2xl font-bold">Add to Locol</button> */}
          
            
           
          </div>
          <button onClick={() => navigate("/home")} className="p-2 text-lg text-white w-[50%] bg-black rounded font-lg">
            Go Back
          </button>
        </div>
      </div>

      <div className="w-2/4 text-center border-[4px] py-10 mt-2 border-white my-5">
        <h1 className="text-4xl font-bold text-black">Cart Area</h1>
        <div className="flex items-center justify-center gap-10 pt-5 text-lg font-bold"><h1>Images</h1><h1 className="pl-8 ">Title</h1><h1>Price</h1><h1>Quantity</h1></div>
      {cart.map((item, i) => (
        <div key={i} className="flex justify-center gap-10 py-10 item-center border-2 mt-5 mx-5">
          <img src={item.images} width="100" height="100" alt="" />
            <h1 className="text-lg font-bold ">{item.title}</h1>
            <div className="flex flex-col items-center justify-center w-10 h-10 space-x-2 bg-gray-700 rounded item">     <h1 className="text-lg font-bold ">{item.price}</h1> </div>
   
            <div className="flex flex-col items-center justify-center w-10 h-10 space-x-2 bg-gray-700 rounded item">
           
              <span>{item.quantity}</span>
        
            </div>
        </div>
      ))}  
                
      </div>
    </div>
    </div>);
}
export default Section;