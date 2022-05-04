import React, { useState } from "react";
import Data from "./Data";
import Order from "./Order";

const Bill =(props)=>{
    const total = props.items['a']*25+props.items['b']*170+props.items['c']*220+props.items['d']*270+props.items['e']*210+200*props.items['f']+180*props.items['g'];
    console.log("items: ",props.items);
    let item = window.localStorage.getItem("items");
    window.localStorage.setItem("items",props.items);
    let item2 = window.localStorage.getItem("items");
    console.log("items2: ",item2);
    const products =Data.map((data)=>{
        const ID=data.id;
        if(props.items[ID]!=0){
            return (<div className="block flex justify-center">
                <span>{data.recipeName}</span>
                <span className="ml-24 mr-16">{props.items[ID]}</span>
                <span>{props.items[ID]*data.price}</span>
                
                </div>)
        }
    })

    const [order,setOrder]=useState(false);
    const onclick =()=>{
        alert('Your order is placed !!');
        setOrder(true)
    }
    if(order==false){
        return (
        
            <div className="flex justify-center">
                
                <div className="border-2 mt-6 border-gray-400 pb-6 rounded-2xl xl:w-2/6 lg:w-3/6 md:w-4/6 w-5/6">
                    <h1 className="text-4xl m-2 text-center">Bill</h1>
                    <div className="flex justify-center mt-4 font-bold">
                        <span>Dish Name</span>
                        <span className="ml-20 mr-12">Quantity</span>
                        <span>Price</span>
                    </div>
                    <div className="mt-2">
                        {products}
                        <div className="flex justify-center m-2">
                            <span className="text-center">Total is <span className="font-bold">₹{total}</span></span>
                        </div>
                        
                    </div>

                    <div className="flex justify-center">
                    <a onClick={()=>props.changePage()} className='text-center  mt-4 w-36  rounded-xl  text-2xl border-2 bg-red-300'>Go back</a>
                <a onClick={()=>onclick()} className='text-center  mt-4 ml-4 w-36 rounded-xl  text-2xl border-2 bg-green-300'>Place Order</a>
                </div>
                    
                </div>
                
                
            </div>
        );
    }else{
        return <div>
            <h1 className="text-center text-7xl m-4">Thank You</h1>
            <div className="flex justify-center my-10">
                  <a href="./order" className="w-44 text-center text-3xl rounded-2xl p-2 text-white bg-yellow-300 hover:bg-white hover:text-yellow-500 hover:shadow-2xl">
                    Order More
                  </a>
                  <a href="./" className="w-44 text-center text-3xl rounded-2xl p-2 text-white bg-yellow-300 hover:bg-white hover:text-yellow-500 ml-4 hover:shadow-2xl">
                    Go To Home
                  </a>
              </div>
        </div>
    }

        
    
}

export default Bill ;