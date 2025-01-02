import React, { useState } from 'react';

function Contact() {

    const [err, setErr] = useState("");
    const [input, setInput]=useState({
        name:"",
        email:"",
        message:""
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setInput({...input,[name]:value})
        
        
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.name || !input.email || !input.message ) {
            setErr("required!")
            return ;
        }
        setErr("");
        console.log(input)
        const inputReset = {
            name: "",
            email: "",
            message: ""
        }
        
        setInput(inputReset)

    };

   
  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container py-4 m-auto px-4 md:px-20 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="bg-white m-auto p-5 rounded-lg shadow-lg space-y-6 max-w-xl">
{err && <div className='text-red-500 text-center'>{err}</div>}
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${ (!input.name && err) ? 'border-red-500' : ""}`}
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
              className={`w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${(!input.email && err)?"border-red-500":""}`}
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
              className={`w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${(!input.message && err)?"border-red-500":""}`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </>
  );
}

export default Contact;
