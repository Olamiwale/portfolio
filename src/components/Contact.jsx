import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(' ')
    alert('submitted')

    console.log(formData);
  };

  return (
    <div className="mt-[150px] flex justify-center flex-col gap-8 items-center">

      <h1 className="text-2xl  font-bold text-center uppercase">  Contact Me </h1>

      <div className="flex max-md:flex-col flex-row md:max-w-4xl m-5 gap-5 w-full">
        <div className="w-full rounded-lg md:w-1/2 border-2  p-8 flex flex-col items-center justify-center">
          <img
            src="https://via.placeholder.com/300x300.png"
            alt="Contact us"
            className="rounded-full mb-6 w-64 h-64 object-cover"
          />
          <h2 className=" text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">Follow us on social media</p>

          <div className="flex space-x-10 mb-5">
           <a href="#"
               className="text-white shadow-lg hover:text-gray-200 transition-colors"
            >
              <img img src="./github.png" className="w-8"></img>
            </a>
           <a href="#"
               className="text-white shadow-lg hover:text-gray-200 transition-colors"
            >
              <img img src="./linkdlin.png" className="w-8"></img>
            </a>
           <a href="#"
               className="text-white shadow-lg hover:text-gray-200 transition-colors"
            >
              <img img src="./X.png" className="w-8"></img>
            </a>

           
  
          </div>

          <a href="www.whatsapp.com" className="w-full shadow-lg shadow-gray-300">
             <button
              type="submit"
              className="w-full flex justify-center items-center gap-8  bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition-colors duration-300 uppercase font-semibold"
            >
             <span className="font-bold">Whatsapp </span>  
             <img src="./whatapp.png" className="w-5" />
            </button>
          </a>

         
        </div>

        <div className="w-full md:w-1/2 rounded-lg border-2 p-8">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
             
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none h-28"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 uppercase font-semibold"
            >
              Send Message
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
}
