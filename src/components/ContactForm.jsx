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
        // Reset message after 5 seconds
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
          rows="5"
          placeholder="Your message"
          required
          className="bg-white border-[4px] border-black rounded-2xl p-4 font-mont font-bold text-xl placeholder:text-gray-300 focus:outline-none focus:ring-4 ring-[#7AD7CF] resize-none transition-all w-full"
        ></textarea>
      </div>

      {/* Status & Send Button */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex-1">
          {status === "success" && (
            <p className="font-mont font-black text-black text-xl italic uppercase">
              ✨ Sent Successfully!
            </p>
          )}
          {status === "error" && (
            <p className="font-mont font-black text-red-600 text-xl uppercase">
              Error! Try again.
            </p>
          )}
        </div>

        <button 
          type="submit"
          disabled={status === "sending"}
          className="bg-[#7AD7CF] border-[4px] border-black rounded-2xl px-16 py-4 font-mont font-black text-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 active:shadow-none active:translate-y-1 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  )
}

export default ContactForm