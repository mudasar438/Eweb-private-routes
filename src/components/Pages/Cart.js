import React from 'react'
import { useState } from 'react'
import { addToCart } from './home'

function get(){
    var getJson = localStorage.getItem('cart')
    if(getJson){
       const arrayName = JSON.parse(getJson)
       return  arrayName;
    }
}
const Cart = () => {
    const [cart, setCart] = useState(get())


console.log(cart)


  return (
    <>
   <div className='max-w-screen-2xl mt-12'>
    <div className="w-[40%] bg-blue-400  p-5 mx-auto ">

        {
            
               
                    <div className="flex flex-col  justify-between items-center">
                            <div className="text-3xl p-5">{cart.name}</div>
                        <div className="flex items-center">
                            <img src={cart.image} className="w-50 h-50 rounded-md mr-5" alt=""/>
                        </div>
                     
                    </div>
                
            
        }

        
    </div>
    
   </div>
    </>
  )
}

export default Cart