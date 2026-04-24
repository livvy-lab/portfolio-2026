import React from 'react'
import ContactForm from '../components/ContactForm'
import ChatIllustration from '../components/ChatIllustration'

const Contact = () => {
  return (
    /* Reduced pt-20 to pt-10 for mobile so the form isn't pushed too far down */
    <div className="flex flex-col items-center justify-between w-full min-h-[70vh] md:min-h-[80vh] pt-10 md:pt-20 pb-10 px-6 animate-fadeIn">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full flex-grow">
        
        {/* Hidden on mobile, visible on desktop (lg and up) */}
        <div className="hidden lg:block flex-shrink-0">
          <ChatIllustration />
        </div>
        
        <ContactForm />
      </div>

      <footer className="mt-16 md:mt-20 w-full text-center">
        <p className="font-mont font-bold text-black/40 text-xs md:text-base tracking-wide uppercase px-4">
          DESIGNED & BUILT BY OLIVIA WRIGHT • 
          <span className="block md:inline mt-1 md:mt-0">
            INSPIRED BY{' '}
            <a 
              href="https://braydenfriesen.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors"
            >
              BRAYDEN FRIESEN
            </a>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Contact