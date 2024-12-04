/*import React, {useState} from 'react'

export default function Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_b13uuv8",
        "template_w7brugq", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "DVv4xOWE9AMUkkpqR" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Message failed to send.");
        }
      );
  };
  return (
    <form
            onSubmit={submit}
            className="w-full bg-slate-200  h-[400px] p-5 shadow-slate-500"
          >
            <div className="flex gap-10 flex-col">
              <input
                 value={formData.name}
                 onChange={handleChange}
                className="p-3" 
                placeholder="Name"
                name='name'
                type='text'
              />
              <input
                value={formData.email}
                onChange={handleChange}
                className="p-3" 
                placeholder="Email"
                name='email'
                type='email'
              />
              <textarea
                value={formData.message}
                onChange={handleChange}  
                rows={4} 
                className="p-3" 
                placeholder="Message"
                type='text'
                name='message'
              />
              <div className="w-full space-y-5">
                <button className="bg-blue-600 p-3 w-full shadow-md rounded-md shadow-gray-500 hover:bg-blue-500 transition-all duration-500 uppercase font-semibold text-white" 
                type='submit'>
                  send message
                </button>
                <div className="fixed bottom-[100px] right-0 bg-green-600 shadow-lg shadow-black  p-5 hover:bg-green-500 transition-all duration-500 rounded-full text-white">

                  <a href='https://wa.me/+2347035489194?text=Hello%20there!'>
                  <img src='./whatapp.png' className='w-10 rounded-full' />
                  </a>
                  
                </div>
              </div>
            </div>
          </form>  
  )
}

*/



import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Form (){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    emailjs
      .send(
        "service_b13uuv8",
        "template_w7brugq", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "DVv4xOWE9AMUkkpqR" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
           setFormData({ name: "", email: "", message: "", });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Message failed to send.");
        }
      );

    

  };

  return (
    <form className="w-full bg-slate-200  h-[400px] p-5 shadow-slate-500" onSubmit={handleSubmit}>
      <div className="flex gap-10 flex-col">
       
        <input
        placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 w-full border-2"
        />
     
      
       
        <input
        placeholder="Email"
        className="border w-full p-3"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
     
    
      
        <textarea
        placeholder="Message"
        rows={4} 
                className="p-3"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
     
      <button className="bg-blue-600 tracking-widest p-3 w-full shadow-md rounded-md shadow-gray-500 hover:bg-blue-500 transition-all duration-500 uppercase font-semibold text-white" 
                type='submit'>
                  send message
                </button> 

              
                  <a className="bg-green-500 text-center tracking-widest p-3 w-full shadow-md rounded-md shadow-gray-500 hover:bg-green-600 transition-all duration-500 uppercase font-semibold text-white items-center flex justify-center cursor-pointer gap-3" target="_blank"
                  href="https://wa.me/+2347056881825?text=Hello%20there!" 
                >
                  <img src="./whatsapp.png"  className="w-6"/>
                  Whatsapp
                </a> 
             
      
                </div>
    </form>
  );
};

 
