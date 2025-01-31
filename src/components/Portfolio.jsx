// import React from 'react';
// // import java from "../../public/java.png";
// // import python from "../../public/python.webp";
// // import mongoDB from "../../public/mongodb.jpg";
// // import express from "../../public/express.png";
// // import reactjs from "../../public/reactjs.png";
// // import nodejs from "../../public/node.png";
// import hospital from "../../public/Hospital.png";
// import weather from "../../public/Weather.jpg";
// import amazon from "../../public/Amazon.jpg";
// import snake from "../../public/Snake.png";

// function Portfolio() {
//     const cardItem=[
//         {
//             id:1,
//             logo:hospital,
//             name:"Hospital Management System"
//         },
//         {
//             id:2,
//             logo:weather,
//             name:"Weather Application"
//         },
//         {
//             id:3,
//             logo:amazon,
//             name:"Amazon Clone"
//         },
//         {
//             id:4,
//             logo:snake,
//             name:"Snake Game"
//         },
//         // {
//         //     id:5,
//         //     logo:python,
//         //     name:"Python"
//         // },
//         // {
//         //     id:6,
//         //     logo:java,
//         //     name:"Java"
//         // }
//     ]
//   return (
//     <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
//       <div>
//         <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
//         <span className="underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5" >
//               {
//                 cardItem.map(({id, logo,name}) =>(
//                          <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
//                             <img src={logo}
//                             className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" 
//                             alt="" />
//                             <div>
//                                 <div className="px-2 font-bold text-xl mb-2">{name}</div>
//                                 <p className="px-2 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laudantium?</p>
//                             </div> 
//                             <div className="px-6 py-4 space-x-3 justify-around">
//                                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
//                                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source code</button>
//                             </div>
//                          </div>
//                 ))
//               }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Portfolio








import React from "react";
import hospital from "../../public/Hospital.png";
import weather from "../../public/Weather.jpg";
import amazon from "../../public/Amazon.jpg";
import snake from "../../public/Snake.png";

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: hospital,
            name: "Hospital Management System",
            description: "Designed and implemented a system to manage patient records and hospital operations using Java, MySQL, and JDBC. Optimized data retrieval and ensured seamless integration of database operations.",
            videoLink: "",
            sourceCodeLink: "",
        },
        {
            id: 2,
            logo: weather,
            name: "Weather Application",
            description: "Built a responsive web application using HTML, CSS, and JavaScript to display real-time weather data by integrating with a weather API. The app provides accurate weather updates and a user-friendly interface.",
            videoLink: "",
            sourceCodeLink: "",
        },
        {
            id: 3,
            logo: amazon,
            name: "Amazon Clone",
            description: "Created a mock Amazon homepage using HTML and CSS to practice front-end development skills. The project focuses on replicating the layout, design, and responsiveness of Amazon's homepage.",
            videoLink: "",
            sourceCodeLink: "",
        },
        {
            id: 4,
            logo: snake,
            name: "Snake Game",
            description: "Developed a Java-based Snake Ladder game using Swing/AWT for the user interface. Managed game logic and state to create an interactive and fun gaming experience.",
            videoLink: "",
            sourceCodeLink: "",
        },
    ];

    const handleButtonClick = (event, link) => {
        if (!link) {
            event.preventDefault();
            alert("Link not available yet!");
        }
    };

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-8 ">Portfolio</h1>
                <span className="underline font-semibold text-lg block mb-6">
                    Featured Projects
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardItem.map(({ id, logo, name, description, videoLink, sourceCodeLink }) => (
                        <div
                            key={id}
                            className="border-[2px] rounded-lg p-6 bg-white shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300"
                            style={{ minHeight: '400px' }} // Consistent height for all cards
                        >
                            <img
                                src={logo}
                                className="w-20 h-20 rounded-full border-[2px] mb-4 object-cover"
                                alt={name}
                                style={{ objectFit: 'contain', width: '80px', height: '80px' }}
                            />
                            <h2 className="text-xl font-bold text-center mb-2">{name}</h2>
                            <p className="text-gray-700 text-sm text-center mb-6 flex-grow">
                                {description}
                            </p>
                            <div className="flex justify-center space-x-4 w-full mt-auto"> {/* Push buttons to bottom */}
                                <a
                                    href={videoLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleButtonClick(e, videoLink)}
                                    className="w-1/2"
                                >
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 w-full rounded">
                                        Video
                                    </button>
                                </a>
                                <a
                                    href={sourceCodeLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleButtonClick(e, sourceCodeLink)}
                                    className="w-1/2"
                                >
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 w-full rounded">
                                        Source Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;