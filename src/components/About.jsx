// import React from 'react'

// function About() {
//   return (
//     <div  name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
//       <div>
//       <h1 className="text-3xl font-bold mb-5">About</h1>
//       <p>
//       I’m a tech enthusiast with a background in programming 
//       and software development. My journey in tech began with a strong 
//       interest in problem-solving, which led me to explore various programming 
//       languages and technologies. Over time, I’ve developed expertise in Java, MySQL, 
//       and web development, and I’m constantly expanding my knowledge in cloud computing and AI. 
//       </p>
//       <br />
//       <h1 className="text-green-600 font-semibold text-xl">
//       Education & Traning
//       </h1>
//       <span>
//       B.Tech in Electronics & Communication Engineering
//       Prestige Institute of Engineering Management & Research | CGPA: 7.17/10 | 2021 - 2025  

//       12th Grade
//       CIOMA Public Hr. Sec. School, Shajapur | MPBSE| 2021

//       10th Grade
//       Sahaj Public School, Shajapur | CBSE | 2019
//       </span>
//       <br/>
//       <br/>
//       <h1 className="text-green-600 font-semibold text-xl">
//       Skills & Expertise
//       </h1>
//       <span>
//         Proficient in [Programming Languages] Experienced with [Software
//         Tools/Technologies] Strong grasp of [Design Principles/Concepts]
//         Excellent problem-solving skills Effective communicator and collaborator
//       </span>
//       <br/>
//       <br/>
//       <h1 className="text-green-600 font-semibold text-xl">
//       Professional Experience
//       </h1>
//       <span>
//         [Job Title], [Comany/Organization], [Dates], [Brief description of 
//         responsibilites and achievements] [Job Title], [Comapny/organization],
//         [Dates] [Brief description of responsibilities and achievements] [Freelance/
//         Contract Work], [Client/Organization], [Dates] [Brief description of Projects
//          and Contribution]
//       </span>
//       <br/>
//       <br/>
//       <h1 className="text-green-600 font-semibold text-xl">
//       Achievements & Awards
//       </h1>
//       <span>
//         [Award/Recognition], [Organization/Institution], [Year] [Achievement],
//         [Organization/Platform], [Year]
//       </span>
//       <br/>
//       <br/>
//       <h1 className="text-green-600 font-semibold text-xl">
//       Mission Statement
//       </h1>
//       <p>
//             My mission is to leverage my skills and creativity to deliver
//             innovation [Your Field] solution that exceed client expectation and
//             contribute positively to the digital landscape. I am committed to 
//             continous learning and growth, always seeking new challenges and 
//             opportunities to expand my horizons.
//       </p>
//       </div>
//     </div>
//   )
// }

// export default About
import React from 'react';

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          I’m a tech enthusiast with a background in programming and software development. My journey in tech began with a strong interest in problem-solving, which led me to explore various programming languages and technologies. Over time, I’ve developed expertise in Java, MySQL, and web development, and I’m constantly expanding my knowledge in cloud computing and AI.
        </p>
        <br />

        <h1 className="text-green-600 font-semibold text-xl">Education & Training</h1>
        <ul className="list-disc list-inside">
          <li>
            <strong>B.Tech in Electronics & Communication Engineering</strong><br />
            Prestige Institute of Engineering Management & Research | CGPA: 7.17/10 | 2021 - 2025
          </li>
          <li>
            <strong>12th Grade</strong><br />
            CIOMA Public Hr. Sec. School, Shajapur | MPBSE | 2021
          </li>
          <li>
            <strong>10th Grade</strong><br />
            Sahaj Public School, Shajapur | CBSE | 2019
          </li>
        </ul>
        <br />

        <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise</h1>
        <ul className="list-disc list-inside">
          <li>Proficient in Java, C, C++</li>
          <li>Experienced with MySQL, JDBC, HTML, CSS, JavaScript</li>
          <li>Strong grasp of Object-Oriented Programming (OOP) principles</li>
          <li>Basic knowledge of Cloud Computing (AWS EC2, S3)</li>
          <li>Excellent problem-solving skills</li>
          <li>Effective communicator and collaborator</li>
        </ul>
        <br />

        <h1 className="text-green-600 font-semibold text-xl">Experience</h1>
        <ul className="list-disc list-inside">
          <li>
            <strong>Freelance Developer</strong><br />
            Worked on various small projects involving Java, MySQL, and Web development. | 2022 - Present
          </li>
          <li>
            <strong>Internship</strong><br />
            Prestige Institute of Engineering Management & Research | Gained hands-on experience in Java and database management. | Summer 2023
          </li>
        </ul>
        <br />

        <h1 className="text-green-600 font-semibold text-xl">Achievements & Awards</h1>
        <ul className="list-disc list-inside">
          <li>Completed Core Java Training with distinction</li>
          <li>Successfully built and deployed a Hospital Management System using Java and MySQL</li>
        </ul>
        <br />

        <h1 className="text-green-600 font-semibold text-xl">Mission Statement</h1>
        <p>
          My mission is to leverage my skills and creativity to deliver innovative software solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;