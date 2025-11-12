import React from 'react'
import { BsBookmarkPlusFill } from "react-icons/bs";
import { AiFillOpenAI } from "react-icons/ai";


function Mycard(props) {
     return (
          <>
                <div className="max-w-xs bg-white shadow-lg rounded-xl overflow-hidden border">
      {/* Badge */}
      <div className="relative">
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_350_pro_1.png?v=1742303499"
          alt="boAt Lunar Discovery"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          best seller <BsBookmarkPlusFill />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tag and Rating */}
        <div className="flex items-center justify-between bg-yellow-400 text-sm px-2 py-1 rounded-md font-medium mb-2">
          <span>30 hours playback</span>
          <span className="flex items-center gap-1">
            ⭐ <span>4.8</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-gray-800 font-semibold text-lg mb-2">
        {props.name.name} <AiFillOpenAI className='text-red-500 text-2xl'/>
        </h2>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">₹{props.name.price}</span>
          <span className="text-gray-400 line-through text-sm">{props.name.oldprice}</span>
          <span className="text-green-600 text-sm font-medium">{props.name.discount} %</span>
        </div>

        {/* Color Options */}
        <div className="flex items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-gray-700 border-2 border-gray-300"></div>
          <span className="ml-2 text-gray-500 text-sm">+4</span>
        </div>
      </div>
    </div>
          </>
     )
}

export default Mycard