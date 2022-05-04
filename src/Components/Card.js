import React from "react";
import Quantity from "./Quantity";
const Card = (props)=>{
    return (
                <div className="mt-1 relative bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden">
                            <img src={props.data.imageSRC} alt={props.data.imageALT} className="w-full h-32 sm:h-48 object-cover" />
                            <div className="flex">
                            <div className="m-4">
                                <div>
                                    <span className="font-bold">{props.data.recipeName}</span>
                                    
                                    <h2 className="font-semibold text-2xl">₹ {props.data.price}</h2>
                                </div>
                                
                            </div>
                            <div className=" mt-3 ml-40">
                            <Quantity 
                                    no={props.no}
                                    add={props.add}
                                    id={props.id}
                                    remove={props.remove}
                                    />
                            </div>
                            </div>
                            <div className="absolute top-0 bg-gray-200 text-gray-500 rounded-full px-2 py-1 ml-2 mt-2">
                                <span>{props.data.rating}⭐</span>
                            </div>
                        </div>
    );
}

export default Card;