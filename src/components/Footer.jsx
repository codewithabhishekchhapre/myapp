import React from 'react'

function Footer() {
  return (
    <>
     {/* FOOTER SECTION */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-4">&copy; 2025 BaseraHub. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer