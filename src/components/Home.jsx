// import React from 'react';
// import pic from "../../public/Profile.svg";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io5";
// import { FaTelegram } from "react-icons/fa6";
// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa6";
// import { FaNodeJs } from "react-icons/fa";
// import { ReactTyped } from "react-typed";

// function Home() {
//   return (
//     <>
//     <div 
//        name="Home"
//        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
//         <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
//             <span className="text-xl">Welcome In My Feed</span>
//            <div className="flex space-x-1 text-2xl md:text-4xl">
//            <h1>Hello, I'm a</h1>
//             {/* <span className="text-red-700 font-bold">Developer</span> */}
//             <ReactTyped
//           className="text-red-700 font-bold"
//           strings={["Developer", "Programmer", "Coder"]}
//           typeSpeed={40}
//           backSpeed={50}
//           loop={true}

//             />
//            </div>
//            <br />
//             <p className="text-sm md:text-md text-justify">
//             Hi, I’m Ankit Solanki, a passionate software developer with a strong foundation in 
//             Java, JDBC, MySQL, and web development. I’m currently pursuing my B.Tech in Electronics & Communication 
//             Engineering and have a keen interest in AI, mobility, and data analytics. I love building innovative solutions
//             that solve real-world problems and am always eager to learn and grow in the tech industry.
//             </p>
//             <br />
//             {/* Social media icons */}
//         <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
//             <div className=" space-y-2">
//                 <h1 className="font-bold ">Available on</h1>
//                 <ul className="flex space-x-5">
//                 <li>
//                     <a href="https://www.facebook.com/" target="_blank">
//                     <FaFacebookSquare className="text-2xl cursor-pointer" />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.linkedin.com/" target="_blank">
//                     <FaLinkedin className="text-2xl cursor-pointer"/>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.youtube.com/" target="_blank">
//                     <IoLogoYoutube className="text-2xl cursor-pointer" />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.telegram.com/" target="_blank">
//                     <FaTelegram className="text-2xl cursor-pointer"/>
//                     </a>
//                 </li>
//                 </ul>
//             </div>
//             <div className="space-y-2">
//             <h1 className="font-bold">Currently Working on</h1>
//                 <div className="flex space-x-5">
//                   <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
//                   <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
//                   <FaReact  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
//                   <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
//                 </div>
//             </div>
//           </div>
//         </div>
//         <div className="md:w-1/2 md:ml-48 md:mt-25 mt-8 order-1">
//             <img src={pic} className="rounded-full md:w-[500px] md:h-[500px]" 
//              alt="" 
//             />
//         </div>
//         </div>
//     </div>
//     <hr />
//     </>
//   )
// }

// export default Home;
import React from 'react';
import pic from "../../public/Profile.png";
import { FaFacebookSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
// import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";

function Home() {
  return (
    <>
      <div 
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Text Content */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I’m Ankit Solanki, a passionate software developer with a strong foundation in Java, JDBC, MySQL, and web development. I’m currently pursuing my B.Tech in Electronics & Communication Engineering and have a keen interest in AI, mobility, and data analytics. I love building innovative solutions that solve real-world problems and am always eager to learn and grow in the tech industry.
            </p>
            <br />

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FaFacebookSquare className="text-2xl cursor-pointer hover:text-blue-600 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <IoLogoYoutube className="text-2xl cursor-pointer hover:text-red-600 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.telegram.com/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                      <FaTelegram className="text-2xl cursor-pointer hover:text-blue-500 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack Icons */}
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working on</h1>
                <div className="flex space-x-5">
                  {/* <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" /> */}
                  {/* <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" /> */}
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiSpring className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiSpringboot className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Profile Image */}
          <div className="md:w-1/2 md:ml-48 md:mt-25 mt-8 order-1">
            <img 
              src={pic} 
              className="rounded-full md:w-[500px] md:h-[500px] w-[300px] h-[300px] mx-auto" 
              alt="Ankit Solanki - Software Developer" 
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;