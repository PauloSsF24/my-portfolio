"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre mim" },
    { href: "#projetos", label: "Projetos" },
    { href: "#linguagens", label: "Linguagens" },
    { href: "#contato", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.clientHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-dark text-light px-6 py-4 flex justify-between items-center shadow-lg fixed w-full z-50">
      <div className="text-2xl font-bold text-primary">Paulo Sérgio</div>

      {/* Desktop */}
      <ul className="hidden md:flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`hover:text-primary transition ${
                activeSection === link.href ? "text-primary font-semibold" : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-primary"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-dark border-t border-primary/30 shadow-lg md:hidden animate-slideDown">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block text-lg hover:text-primary transition ${
                    activeSection === link.href ? "text-primary font-semibold" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
