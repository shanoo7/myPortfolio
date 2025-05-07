import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Contact() {

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })


  };
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!input.name || !input.email || !input.message) {
      setErr("All fields are required!")
      return;
    }
    setErr("")
    setLoading(true)
    try {
      await axios.post("https://getform.io/f/ayvvzpkb", input)
      console.log(input)
      const inputReset = {
        name: "",
        email: "",
        message: ""
      }
      setInput(inputReset)
      toast.success("Successfully created!")
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      toast.error("This is an error!");
    } finally {
      setLoading(false)
    }
  };


  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container py-4 m-auto px-4 md:px-20 min-h-screen">
      <h1 className="text-3xl md:text-4xl text-center font-bold text-white my-5">
            Contact Me
          </h1>
        <form onSubmit={handleSubmit} className=" shadow-red-500 hover:shadow-red-200 m-auto p-5 rounded-lg shadow-lg space-y-6 max-w-xl">
          {err && <div className='text-red-500 text-center'>{err}</div>}
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full mt-1 p-3 bg-gray-800 text-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${(!input.name && err) ? 'border-red-500' : ""}`}
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full mt-1 p-3 bg-gray-800 text-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${(!input.email && err) ? "border-red-500" : ""}`}
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              value={input.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className={`w-full mt-1 p-3 bg-gray-800 text-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${(!input.message && err) ? "border-red-500" : ""}`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-medium py-3 px-4 rounded-lg shadow hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
