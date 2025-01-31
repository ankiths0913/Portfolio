// import React from 'react';
// import {FaFacebook, FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa6";

// function Footer() {
//   return (
//     <>
//        <hr />
//          <footer className="py-12">
//               <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
//                   <div className=" flex flex-col items-center justify-center">
//                      <div className="flex space-x-4">  
//                         <FaFacebook size={24} />
//                         <FaTwitter size={24} />
//                         <FaInstagram size={24} />
//                         <FaLinkedinIn size={24} />
//                      </div>
//                      <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
//                         <p className="text-sm">
//                             &copy; 2025 Your Company. All rights reserved.
//                         </p>
//                         <p className="text-sm">Supportive Partner Ankit</p>
//                      </div>
//                   </div>
//               </div>
//          </footer>
//     </>
//   )
// }

// export default Footer;
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-50">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={24} className="text-gray-700 hover:text-blue-600 duration-200 cursor-pointer" />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={24} className="text-gray-700 hover:text-blue-400 duration-200 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} className="text-gray-700 hover:text-pink-600 duration-200 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={24} className="text-gray-700 hover:text-blue-700 duration-200 cursor-pointer" />
              </a>
            </div>

            {/* Copyright Text */}
            <div className="mt-8 border-t border-gray-300 pt-8 flex flex-col items-center">
              <p className="text-sm text-gray-600">
                &copy; 2025 Ankit Solanki. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Made with 😁 by Ankit Solanki
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;