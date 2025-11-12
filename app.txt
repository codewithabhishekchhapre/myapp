import React from 'react'
import Abc from './components/Abc';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(10)
  const [name, setname] = useState("user")
  const [show,setshow]=useState(false)

  var data = [
    {
      "id": 1,
      "title": "boAt Lunar Discovery",
      "tag": "BT Calling",
      "rating": 5.0,
      "price": 1099,
      "originalPrice": 8499,
      "discount": "87% off",
      "badge": "New Launch",
      "colors": 4,
      "image": "https://m.media-amazon.com/images/I/61XcEGo9TwL._SX679_.jpg"
    },
    {
      "id": 2,
      "title": "Noise ColorFit Ultra 3",
      "tag": "AMOLED Display",
      "rating": 4.8,
      "price": 2999,
      "originalPrice": 7999,
      "discount": "63% off",
      "badge": "Best Seller",
      "colors": 3,
      "image": "https://m.media-amazon.com/images/I/71+QJ5wZzOL._SX679_.jpg"
    },
    {
      "id": 3,
      "title": "Fire-Boltt Phoenix Pro",
      "tag": "BT Calling",
      "rating": 4.6,
      "price": 1499,
      "originalPrice": 5999,
      "discount": "75% off",
      "badge": "Top Rated",
      "colors": 5,
      "image": "https://m.media-amazon.com/images/I/61AHiYyu3ZL._SX679_.jpg"
    },
    {
      "id": 4,
      "title": "Realme Watch 3 Pro",
      "tag": "GPS + Calling",
      "rating": 4.9,
      "price": 3499,
      "originalPrice": 8999,
      "discount": "61% off",
      "badge": "Hot Deal",
      "colors": 2,
      "image": "https://m.media-amazon.com/images/I/61D5uTQW4-L._SX679_.jpg"
    },
    {
      "id": 5,
      "title": "Fastrack Revoltt FS1",
      "tag": "BT Calling",
      "rating": 4.7,
      "price": 1999,
      "originalPrice": 6999,
      "discount": "71% off",
      "badge": "New Arrival",
      "colors": 3,
      "image": "https://m.media-amazon.com/images/I/61dl1vFu6rL._SX679_.jpg"
    }
  ]



  function increment() {
    setcount(count + 1)
    console.log(count)
  }
  function decrement() {
    setcount(count - 1)
    console.log(count)
  }

  function changename() {
    setname("abhishek")
  }

  function inputhandler(e) {
    // console.log(e.target.value)
    setname(e.target.value)
  }

  return (
    <>

    {
      show?<div className='h-40 w-74 bg-gray-100'>
          <h3 className='text-gray-400'>Name: <span className='text-gray-900'>Abhishek</span></h3>
          <h3 className='text-gray-400'>email: <span className='text-gray-900'>abhishekgurjar5020@gmail.com</span></h3>
          <h3 className='text-gray-400'>email: <span className='text-gray-900'>abhishekgurjar5020@gmail.com</span></h3>
          <h3 className='text-gray-400'>email: <span className='text-gray-900'>abhishekgurjar5020@gmail.com</span></h3>
      </div>:
      <div>

      <input type="text" className='border' onChange={(e) => { inputhandler(e) }} />
      <h1>Hello ,{name}</h1>

      
      <div className='flex gap-4'>
        <h1>count {count}</h1>
        <button onClick={increment} className='border rounded bg-sky-600 px-4 py-1 text-white'>increment</button>
        <button onClick={decrement} className='border rounded bg-green-600 px-4 py-1 text-white'>decrement</button>
        <button onClick={changename} className='border rounded bg-green-600 px-4 py-1 text-white'>change name</button>
        {/* 
        {
          data.map(function (obj) {
            return <Card objdata={obj}/>
          })
        } */}

      </div>
      </div>
    }

    




    </>
  )
}

export default App