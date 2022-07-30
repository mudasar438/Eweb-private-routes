import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import shopping from '../imgs/shoping.jpg'
// import {getAddToCart} from './Cart'
import Navbar from '../Pages/navbar'

const Home = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get('https://fakse-store-api.herokuapp.com/api/v1/categories?limit=50');
        setData(res.data);
    }
    
    useEffect(()=>{
        getData();
    },[])
    // console.log(data)
    
     const addToCart =async (item) => {
        console.log(item)

        try{

            localStorage.setItem('cart',JSON.stringify(item))
            console.log("data add in local storage", item)
            navigate('/Cart')
        }
        catch{
            console.log("error")

        }
        }

  return (
    
<>
<Navbar/>
<div className="">
  <div className="py-16 bg-gray-900">
<div  className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
<div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
  <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
      <h1 className="text-2xl text-gray-700 font-bold md:text-3xl">Buy now and benefit up to <span className="text-blue-500">30% off</span></h1>
      <p className="text-lg">Be part of millions people around the world using tailus in modern User Interfaces.</p>
      <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
          <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
              <span className="block text-white font-semibold">
                  Start buying
              </span>
          </button>
          <button type="button" title="more about" className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
              <span className="block text-gray-600 font-semibold">
                  More about
              </span>
          </button>
      </div>
  </div>
  <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
      
      <div className="col-span-5 row-span-5">
          <img  src={shopping}className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy"/>
      </div>
  </div>
</div>
</div>
<div className="w-full ">
    <p className='w-[50%] mx-auto text-center text-white text-4xl mt-10'>New Products</p>
</div>
</div>

      
  <div className="grid grid-cols-1 md:grid-cols-4  p-5  mb-12">
                {data.map((item) => {
                  return (
                    <div className="w-full  p-1 md:p-2 my-12 " key={item.id}>
                      <ul className="bg-white rounded-xl">
                        <li className=' h-[150px] mb-12 mt-12'>
                          <img
                            src={item.image}
                            alt=""
                            srcset=""
                            class="block object-cover object-center w-full h-full rounded-lg"
                          />

                          <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                            {item.model}
                          </h4>
                          <p class=""> Price {item.name}</p>
                          {/* <p className="text-blue-500">{item.size}</p>
                          <p className="text-blue-500">{item.detail}</p> */}
                          <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                            <span class="mx-1" onClick={(e)=>addToCart(item)} > Preview Image</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>

  </div>
    </>
  )
}

export default Home


