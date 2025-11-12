import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Signup = () => {


  var name=["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
  console.log(name[1])

const [edit , setedit]=useState(false);
  const [fromData, setFormData] = useState({});
  const [userData, setUserData] = useState([{
    username: "John Doe",
    email: "john@gmail.com",
    mobile: "9876543210",
    password: "password123",
  },
  {
    username: "Jane Smith",
    email: "jane@gmail.com",
    mobile: "9876001122",
    password: "password456",
  }]);


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...fromData,
      [name]: value,
    });
  }

  function formsubmitbtn(e) {
    e.preventDefault();

    // check user is all ready exists
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].email === fromData.email) {
        alert("User already exists with this email!");
        return;
      }
    }

    setUserData([...userData, fromData]);
    setFormData({});

    console.log(fromData);
  }

  // function for deleting a user

  function deleteUser(index) {
    console.log("Delete user at index:", index);
    const newUserData = userData.filter((user, i) => i !== index);
    setUserData(newUserData);
  }

  // function for editing a user

  function editUser(index) {
    console.log("Edit user at index:", index);
    // Implementation for editing user can be added here

    var userToEdit = userData[index];
    setFormData(userToEdit);
    setedit(true);


  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 space-y-10">
      {/* Signup Form */}
      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-md text-white">
      {
        edit ? <h2 className="text-3xl font-semibold text-center mb-6">Edit Account</h2> : <h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>
      }
        

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={fromData.username || ""}
              name="username"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 focus:bg-white/40 placeholder-white/70 text-white focus:outline-none"
            />
          </div>

          {/* Email */}

    {
            !edit ? <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={fromData.email || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 focus:bg-white/40 placeholder-white/70 text-white focus:outline-none"
            />
          </div> : null
    }

          

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              name="mobile"
              value={fromData.mobile || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 focus:bg-white/40 placeholder-white/70 text-white focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={fromData.password || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 focus:bg-white/40 placeholder-white/70 text-white focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            onClick={formsubmitbtn}
            className="w-full py-2 mt-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-white/80">
          Already have an account?{" "}
          <a href="#" className="text-pink-300 hover:underline">
            Login here
          </a>
        </p>
      </div>

      {/* User Table */}
      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-4xl text-white overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">User Details</h3>

        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="text-white/90 border-b border-white/30">
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Mobile</th>
              <th className="py-3 px-4">Password</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user, index) => {
                return (
                  <>
                    <tr className="border-b border-white/10 hover:bg-white/10 transition-all">
                      <td className="py-3 px-4">{user.username}</td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">{user.mobile}</td>
                      <td className="py-3 px-4">{user.password}</td>
                      <td className="py-3 px-4 flex items-center justify-center gap-3">
                        <button
                        onClick={() => editUser(index)}
                         className="p-2 bg-white/30 rounded-full hover:bg-white/50 transition">
                          <FaEdit size={14} />
                        </button>
                        <button
                        onClick={() => deleteUser(index)}
                         className="p-2 bg-white/30 rounded-full hover:bg-white/50 transition">
                          <FaTrash size={14} />
                        </button>
                      </td>
                    </tr>
                  </>
                )
              })
            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Signup;
