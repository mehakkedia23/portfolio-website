import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaPython, FaCuttlefish } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

function TechStack() {
  const tech = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "C", icon: <FaCuttlefish className="text-gray-700" /> },
    { name: "C++", icon: <TbBrandCpp className="text-blue-700" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-wide">🌟 My Tech Stack</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {tech.map((t, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl mb-3 transition-colors duration-300 hover:text-indigo-500">
              {t.icon}
            </div>
            <p className="text-lg font-medium text-gray-700">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
