import React, { useState } from 'react'

const ContactForm = () => {
  const [status, setStatus] = useState("") // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    
    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xbdqqyzo", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
        setTimeout(() => setStatus(""), 5000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      /* Reduced p-6 on mobile, shadow to 8px, and tighter gap */
      className="bg-[#FFD391] border-[4px] border-black rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 md:px-14 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-2xl flex flex-col gap-4 md:gap-6"
    >
      {/* Name Input */}
      <div className="flex flex-col gap-1">
        <label className="font-mont font-black text-xl md:text-2xl text-black ml-1">Name</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Name"
          required
          /* Reduced p-3 and text-lg for mobile */
          className="bg-white border-[3px] md:border-[4px] border-black rounded-xl md:rounded-2xl p-3 md:p-4 font-mont font-bold text-lg md:text-xl placeholder:text-gray-300 focus:outline-none focus:ring-4 ring-[#7AD7CF] transition-all w-full" 
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-1">
        <label className="font-mont font-black text-xl md:text-2xl text-black ml-1">Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Email"
          required
          className="bg-white border-[3px] md:border-[4px] border-black rounded-xl md:rounded-2xl p-3 md:p-4 font-mont font-bold text-lg md:text-xl placeholder:text-gray-300 focus:outline-none focus:ring-4 ring-[#7AD7CF] transition-all w-full" 
        />
      </div>

      {/* Message Input */}
      <div className="flex flex-col gap-1">
        <label className="font-mont font-black text-xl md:text-2xl text-black ml-1">Message</label>
        <textarea 
          name="message" 
          rows="4"
          placeholder="Your message"
          required
          className="bg-white border-[3px] md:border-[4px] border-black rounded-xl md:rounded-2xl p-3 md:p-4 font-mont font-bold text-lg md:text-xl placeholder:text-gray-300 focus:outline-none focus:ring-4 ring-[#7AD7CF] resize-none transition-all w-full"
        ></textarea>
      </div>

      {/* Status & Send Button - Stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-2 gap-4">
        <div className="text-center md:text-left">
          {status === "success" && (
            <p className="font-mont font-black text-black text-lg md:text-xl italic uppercase animate-pulse">
              ✨ Sent Successfully!
            </p>
          )}
          {status === "error" && (
            <p className="font-mont font-black text-red-600 text-lg md:text-xl uppercase">
              Error! Try again.
            </p>
          )}
        </div>

        <button 
          type="submit"
          disabled={status === "sending"}
          /* Full width on mobile (w-full) makes it much easier to tap */
          className="w-full md:w-auto bg-[#7AD7CF] border-[3px] md:border-[4px] border-black rounded-xl md:rounded-2xl px-12 md:px-16 py-3 md:py-4 font-mont font-black text-xl md:text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 active:shadow-none active:translate-y-1 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  )
}

export default ContactForm