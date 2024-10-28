import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-zinc-100 pt-[250px] lg:pt-0 ">
      <div className="px-4 max-w-[1170px] xl:px-0 mx-auto py-20">
        <div className="flex flex-col gap-10 sm:gap-6 md:flex-row flex-wrap md:gap-5 items-center justify-between">
          
          {/* About Section */}
          <div className="flex flex-col max-w-full sm:max-w-[289px] gap-5 p-3 ">
            <Link to="/" className="text-black text-xl md:text-2xl font-medium">About</Link>
            <p className="text-gray-700 lg:text-[16px] text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="py-3 flex flex-col gap-2">
              <Link className="text-black">Email: dahiyasuman@gmail.com</Link>
              <Link>Phone : 8059181803</Link>
            </div>
          </div>

          {/* Quick Links and Categories */}
          <div className="flex w-full sm:w-auto justify-between sm:justify-center gap-10">
            
            {/* Quick Links */}
            <div className="flex flex-col p-2">
              <span className="text-black text-base md:text-lg lg:text-xl font-medium">Quick Links</span>
              <Link to="/home" className="text-gray-700 text-base lg:text-[16px] mt-6">Home</Link>
              <Link to="/blog" className="text-gray-700 text-base lg:text-[16px] mt-6">Blog</Link>
              <Link to="/single-post" className="text-gray-700 text-base lg:text-[16px] mt-6">Single Post</Link>
              <Link to="/page" className="text-gray-700 text-base lg:text-[16px] mt-6">Page</Link>
              <Link to="/contact" className="text-gray-700 text-base lg:text-[16px] mt-6">Contact</Link>
            </div>

            {/* Categories */}
            <div className="flex flex-col p-2">
              <span className="text-black text-base md:text-lg lg:text-xl font-medium">Category</span>
              <p className="text-gray-700 text-base lg:text-[16px] mt-6">Lifestyle</p>
              <p className="text-gray-700 text-base lg:text-[16px] mt-6">Technology</p>
              <p className="text-gray-700 text-base lg:text-[16px] mt-6">Travel</p>
              <p className="text-gray-700 text-base lg:text-[16px] mt-6">Business</p>
              <p className="text-gray-700 text-base lg:text-[16px] mt-6">Economy</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-auto md:w-[392px] rounded-lg bg-white flex flex-col items-center gap-4 p-5 shadow-lg">
            <p className="text-xl md:text-2xl font-semibold text-center">Weekly Newsletter</p>
            <p className="text-[14px] md:text-[16px] font-medium text-gray-400 text-center">Get blog articles and offers via email</p>
            <input 
              className="w-full md:w-[320px] p-3 border-gray-300 border rounded focus:outline-none" 
              type="email" 
              placeholder="Your Email" 
            />
            <button className="bg-blue-700 w-full md:w-[320px] p-3 rounded text-white">Subscribe</button>
          </div>

        </div>
      </div>

      <div className="flex justify-center py-4 border-t border-white/20">
        <p className="text-gray-500 text-sm md:text-base">Copyright Rimel {year}. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
