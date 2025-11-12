import React, { useState } from "react";

const CreateProductCard = () => {

     var [formData , setformData]=useState({});
     const [productData,setproductData]=useState([ {
      id: 1,
      name: "Wireless Headphones",
      desc: "High-quality sound with noise cancellation and long battery life.",
      price: "₹2,999",
      discount: "10%",
      quantity: "15",
      image:
        "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      desc: "Track your fitness and stay connected with style.",
      price: "₹4,499",
      discount: "15%",
      quantity: "20",
      image:
        "https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      desc: "Portable speaker with powerful bass and vibrant sound.",
      price: "₹1,999",
      discount: "5%",
      quantity: "30",
      image:
        "https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&w=600&q=80",
    },])

    // hello
   
  function inputHandler(e){
     const {value, name}=e.target;
     setformData((predata)=>({...predata,[name]:value}))

     
}

function submithandler(e){
     console.log("submited")
     e.preventDefault();

     setproductData((predata)=>([...predata,formData]))
}

function editcard(index){
  console.log(index)
  setformData(productData[index])
}

console.log(formData)
  return (
    <div className="min-h-screen  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create Product Card
        </h2>

        <form className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block text-white font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              name="name"
              value={formData.name}
              onChange={inputHandler}
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-white font-medium mb-1">
              Product Image
            </label>
            <input
              type="text"
              name="image"
              onChange={inputHandler}
              value={formData.image}
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-white font-medium mb-1">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Enter product description"
              onChange={inputHandler}
              name="desc"
              value={formData.desc}
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-white font-medium mb-1">Price</label>
            <input
              type="text"
              placeholder="Enter price"
              onChange={inputHandler}
              name="price"
              value={formData.price}
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Discount */}
          <div>
            <label className="block text-white font-medium mb-1">Discount (%)</label>
            <input
              type="text"
              name="discount"
              onChange={inputHandler}
              placeholder="Enter discount"
              value={formData.discount}
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-white font-medium mb-1">Quantity</label>
            <input
              type="number"
              placeholder="Enter quantity"
              name="quantity"
              onChange={inputHandler}
              value={formData.quantity}
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={submithandler}
            className="w-full py-3 mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
          >
            Create Product
          </button>
        </form>
      </div>

       {/* --- PRODUCT DISPLAY SECTION --- */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Product Preview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productData.map((product,index) => (
            <div
              key={product.id}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-5 hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-white/80 text-sm mb-3">{product.desc}</p>
              <div className="flex justify-between items-center text-white">
                <span className="font-bold">{product.price}</span>
                <span className="text-green-300">{product.discount} OFF</span>
                <span className="text-sm text-white/70">
                  Qty: {product.quantity}
                </span>
              </div>
              <button onClick={()=>{editcard(index)}} className="border px-5 py-1 rounded bg-green-500 text-white font-bold">edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateProductCard;
