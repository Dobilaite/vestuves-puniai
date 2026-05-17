import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const location = useLocation();

  const navItems = [
    { path: "/", label: "Pradžia" },
    { path: "/location", label: "Vieta ir laikas" },
    { path: "/dress-code", label: "Spalvų paletė" },
    { path: "/rsvp", label: "Dalyvavimas" },
    { path: "/contact", label: "Kontaktai" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#f5f0e2]/95 backdrop-blur-md border-b border-[#d8d0bf]">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <span
              className="text-[2rem] font-semibold text-[#7d8f4e] tracking-[-0.03em]"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Vestuvės
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-[0.95rem] font-semibold transition-all duration-300 pb-2 ${
                  isActive(item.path)
                    ? "text-[#7d8f4e]"
                    : "text-[#2f3b1f] hover:text-[#7d8f4e]"
                }`}
              >
                {item.label}

                {isActive(item.path) && (
                  <span className="absolute left-0 right-0 -bottom-[0.7rem] h-[3px] rounded-full bg-[#7d8f4e]" />
                )}
              </Link>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-[#2f3b1f]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-[#d8d0bf] py-5 flex flex-col gap-4 bg-[#f5f0e2]">
            
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-[#7d8f4e]"
                    : "text-[#2f3b1f]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;