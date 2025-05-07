import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/ayvvzpkb", data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container py-4 m-auto px-4 md:px-20 min-h-screen">
      <h1 className="text-3xl md:text-4xl text-center font-bold text-white my-5">Contact Me</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="shadow-red-500 hover:shadow-red-200 m-auto p-5 rounded-lg  space-y-6 max-w-xl bg-gray-200 dark:bg-gray-900">

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            className={`w-full mt-1 p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg  ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
            className={`w-full mt-1 p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg  ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="4"
            placeholder="Enter your message"
            {...register("message", { required: "Message is required" })}
            className={`w-full mt-1 p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border rounded-lg ${errors.message ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#ff695f] text-white font-medium py-3 px-4 rounded-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact
