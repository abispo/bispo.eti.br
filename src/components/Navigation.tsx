"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-blue-400">Alessandro Bispo</h2>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-zinc-400 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-black border-t border-zinc-800">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-zinc-400 hover:text-white transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
