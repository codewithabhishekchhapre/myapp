import React from "react";

const ProductCard = (props) => {
  return (
    <div className="w-60 bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition-all duration-300">
      {/* Offer Badge */}
      <div className="relative">
        <img
          src="https://m.media-amazon.com/images/I/61awPDQz4-L._SL1500_.jpg"
          alt="boAt Nirvana Zenith Pro"
          className="w-full h-40 object-cover bg-gradient-to-r from-amber-500 to-rose-600"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {props.data.offer}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-3">
        {/* Playback and Rating */}
        <div className="flex justify-between items-center text-xs font-semibold mb-1">
          <span className="bg-yellow-400 text-black px-2 py-0.5 rounded">
            {props.data.playback}
          </span>
          <div className="flex items-center bg-yellow-100 px-2 py-0.5 rounded">
            <span className="text-yellow-600 font-bold">★</span>
            <span className="ml-1 text-gray-700">{props.data.rating}</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          {props.data.name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center space-x-2">
          <p className="text-lg font-bold text-gray-900">₹{props.data.price}</p>
          <p className="text-sm line-through text-gray-400">₹{props.data.originalPrice}</p>
          <p className="text-sm text-green-600 font-semibold">{props.data.discount}</p>
        </div>

        {/* Color Option */}
        <div className="flex items-center mt-2">
          <div className="w-4 h-4 bg-black rounded-full border"></div>
          <span className="ml-2 text-xs text-gray-600">+1</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
