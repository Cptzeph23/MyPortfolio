export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-950 sticky top-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400">Zeph Aseka</h1>
      <ul className="flex gap-6 text-gray-300">
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
