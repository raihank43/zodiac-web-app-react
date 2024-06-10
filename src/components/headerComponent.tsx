import { TbStarsFilled } from "react-icons/tb";

export default function HeaderComponent() {
  return (
    <header className="flex items-center justify-between p-4 bg-purple-900">
      <div className="flex items-center space-x-4">
        <TbStarsFilled color="white"/>

        <h1 className="text-xl font-bold text-white">Zodiac Web App React</h1>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="/about" className="text-white">
          About
        </a>
        <a href="/contact" className="text-white">
          Contact
        </a>
      </nav>
    </header>
  );
}
