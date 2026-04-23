import React from 'react'

const ContactForm = () => {
  return (
    <form 
      action="https://formspree.io/f/xbdqqyzo" 
      method="POST"
      /* Increased max-w-lg to max-w-2xl and bumped horizontal padding */
      className="bg-[#FFD391] border-[4px] border-black rounded-[2.5rem] p-10 md:px-14 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-2xl flex flex-col gap-6"
    >
      {/* Name Input */}
      <div className="flex flex-col gap-1">
        <label className="font-mont font-black text-2xl text-black ml-1">Name</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Name"
          required
          className="bg-white border-[4px] border-black rounded-2xl p-4 font-mont font-bold text-xl placeholder:text-gray-300 focus:outline-none focus:ring-4 ring-[#7AD7CF] transition-all w-full" 
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-1">
        <label className="font-mont font-black text-2xl text-black ml-1">Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Email"
          required
          className="bg-white border-[4px] border-black rounded-2xl p-4 font-mont font-bold text-xl placeholder:text-gray-300 focus:outline-none focus:ring-4 ring-[#7AD7CF] transition-all w-full" 
        />
      </div>

      {/* Message Input */}
      <div className="flex flex-col gap-1">
        <label className="font-mont font-black text-2xl text-black ml-1">Message</label>
        <textarea 
          name="message" 
          rows="5" /* Increased rows slightly for the wider look */
          placeholder="Your message"
          required
          className="bg-white border-[4px] border-black rounded-2xl p-4 font-mont font-bold text-xl placeholder:text-gray-300 focus:outline-none focus:ring-4 ring-[#7AD7CF] resize-none transition-all w-full"
        ></textarea>
      </div>

      {/* Send Button */}
      <div className="flex justify-end mt-2">
        <button 
          type="submit"
          className="bg-[#7AD7CF] border-[4px] border-black rounded-2xl px-16 py-4 font-mont font-black text-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 active:shadow-none active:translate-y-1 transition-all cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm