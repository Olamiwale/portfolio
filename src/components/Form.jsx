import React, {useState} from 'react'

export default function Form() {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (name === "") {
      return alert("Please Input Name");
    } else {
      alert("Thank you for reaching out.....");
      setEmail("");
      setName("");
      setMessage("");
    }
  };
  return (
    <form
            onSubmit={submit}
            className="w-full bg-slate-200  h-[400px] p-5 shadow-slate-500"
          >
            <div className="flex gap-10 flex-col">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="p-3"
                placeholder="Name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-3"
                placeholder="Email"
              />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows={4}
                className="p-3 "
                placeholder="Message"
              />
              <div className="w-full space-y-5">
                <button className="bg-blue-600 p-3 w-full shadow-md rounded-md shadow-gray-500 hover:bg-blue-500 transition-all duration-500 uppercase font-semibold text-white">
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
