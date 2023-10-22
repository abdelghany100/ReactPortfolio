import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27645.81817312429!2d31.221098091643494!3d29.987266974992824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846446f98d133%3A0xb587158928bf1d62!2z2KfZhNmF2YbZitio2Iwg2YLYs9mFINin2YTYrNmK2LLYqdiMINin2YTYrNmK2LLYqQ!5e0!3m2!1sar!2seg!4v1697757923473!5m2!1sar!2seg"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full">
              <div className="mb-5">
                <input type="text" placeholder="Enetr Your Name" className="w-full p-3  focus:outline-none rounded-[5px] " />
              </div>
              <div className="mb-5">
                <input type="email" placeholder="Enetr Your Email" className="w-full p-3  focus:outline-none rounded-[5px] " />
              </div>
              <div className="mb-5">
                <input type="text" placeholder="Subjecty" className="w-full p-3  focus:outline-none rounded-[5px] " />
              </div>
              <div className="mb-5">
                <textarea type="text" rows={3} placeholder="Write YOur Message" className="w-full p-3  focus:outline-none rounded-[5px] " />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">Send Message</button>
             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
