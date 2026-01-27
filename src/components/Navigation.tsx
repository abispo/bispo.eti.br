export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-blue-400">Backend Engineer</h2>
        <div className="hidden sm:flex gap-8">
          <a href="#about" className="text-zinc-400 hover:text-white transition">About</a>
          <a href="#skills" className="text-zinc-400 hover:text-white transition">Skills</a>
          <a href="#projects" className="text-zinc-400 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-zinc-400 hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
