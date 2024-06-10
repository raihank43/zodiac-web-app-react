import { TbStarsFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function HeaderComponent() {
  return (
    <header className="flex items-center justify-between p-4 bg-purple-900">
      <div className="flex items-center space-x-4">
        <TbStarsFilled color="white" className="text-3xl" />

        <h1 className="text-xl font-bold text-white">Zodiac Web App React</h1>
      </div>
      <nav className="flex items-center space-x-4">
        <a
          href="https://www.github.com/raihank43"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/raden-raihan-kusuma-9a37b8249/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaLinkedin className="text-3xl" />
        </a>
      </nav>
    </header>
  );
}
