
import { FaLinkedin } from "react-icons/fa";
function About(){

   return(
    <div className="flex flex-col justify-center text-center items-center bg-white">
        <h2 className="text-4xl font-bold text-grey-800 mb-4 ">About Me </h2>
        <p className="italic text-shadow-gray-700 max-w-2xl "> I'm Mehak Kedia, a third-year Computer Science student at Bhilai Institute of Technology, Durg, specializing in Artificial Intelligence. 
        I enjoy building full-stack web applications and exploring the latest innovations in AI. <br /><br />
        With a strong foundation in React, Node.js, and Tailwind CSS, I'm always eager to learn and create meaningful digital experiences. 
        I believe in writing clean, scalable code and love working on projects that challenge my creativity and problem-solving skills.</p>
        <a
          href="https://www.linkedin.com/in/mehak-kedia-18020a290"
          target="_blank"
          className="mt-4 text-blue-600 transition:colors hover:text-blue-800">
            <FaLinkedin size={30}/>

        </a>

    </div>
   )
}
export default About;