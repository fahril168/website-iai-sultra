import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { asset } from '../utils/asset';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'tentang' | 'kegiatan' | null
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleMobileDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const isTentangActive = ['/tentang/profil', '/tentang/visi-misi', '/tentang/sejarah'].includes(location.pathname);
  const isKegiatanActive = ['/kegiatan/program-kerja', '/kegiatan/berita'].includes(location.pathname);

  const navBackground = isHome
    ? isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md text-brand-gray-800'
      : 'bg-transparent text-white'
    : 'bg-white/95 backdrop-blur-md shadow-md text-brand-gray-800 border-b border-brand-gray-100';

  const logoSrc = asset('/assets/logo.png');
  const logoFilter = isHome && !isScrolled ? 'brightness(0) invert(1)' : 'none';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <img
            src={logoSrc}
            alt="Logo IAI Sulawesi Tenggara"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            style={{ filter: logoFilter }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-[0.9375rem]">
          {/* Beranda */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-200 relative py-2 ${
                  isActive
                    ? 'text-maroon font-semibold'
                    : isHome && !isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-brand-gray-800 hover:text-maroon'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Beranda
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
                </>
              )}
            </NavLink>
          </li>

          {/* Tentang (Dropdown) */}
          <li className="relative group">
            <button
              className={`flex items-center gap-1.5 py-2 transition-colors duration-200 focus:outline-none ${
                isTentangActive
                  ? 'text-maroon font-semibold'
                  : isHome && !isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-brand-gray-800 hover:text-maroon'
              }`}
            >
              Tentang
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              {isTentangActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-white rounded-brand-lg shadow-card border border-brand-gray-100 p-2 text-brand-gray-800">
                <Link
                  to="/tentang/profil"
                  className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors"
                >
                  Profil Organisasi
                </Link>
                <Link
                  to="/tentang/visi-misi"
                  className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors"
                >
                  Visi & Misi
                </Link>
                <Link
                  to="/tentang/sejarah"
                  className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors"
                >
                  Sejarah
                </Link>
              </div>
            </div>
          </li>

          {/* Pengurus */}
          <li>
            <NavLink
              to="/pengurus"
              className={({ isActive }) =>
                `transition-colors duration-200 relative py-2 ${
                  isActive
                    ? 'text-maroon font-semibold'
                    : isHome && !isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-brand-gray-800 hover:text-maroon'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Pengurus
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
                </>
              )}
            </NavLink>
          </li>

          {/* Kegiatan (Dropdown) */}
          <li className="relative group">
            <button
              className={`flex items-center gap-1.5 py-2 transition-colors duration-200 focus:outline-none ${
                isKegiatanActive
                  ? 'text-maroon font-semibold'
                  : isHome && !isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-brand-gray-800 hover:text-maroon'
              }`}
            >
              Kegiatan
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              {isKegiatanActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-white rounded-brand-lg shadow-card border border-brand-gray-100 p-2 text-brand-gray-800">
                <Link
                  to="/kegiatan/program-kerja"
                  className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors"
                >
                  Program Kerja
                </Link>
                <Link
                  to="/kegiatan/berita"
                  className="block px-4 py-2.5 rounded-brand text-sm hover:bg-maroon-subtle hover:text-maroon transition-colors"
                >
                  Berita & Kegiatan
                </Link>
              </div>
            </div>
          </li>

          {/* Galeri */}
          <li>
            <NavLink
              to="/galeri"
              className={({ isActive }) =>
                `transition-colors duration-200 relative py-2 ${
                  isActive
                    ? 'text-maroon font-semibold'
                    : isHome && !isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-brand-gray-800 hover:text-maroon'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Galeri
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
                </>
              )}
            </NavLink>
          </li>

          {/* Kontak */}
          <li>
            <NavLink
              to="/kontak"
              className={({ isActive }) =>
                `transition-colors duration-200 relative py-2 ${
                  isActive
                    ? 'text-maroon font-semibold'
                    : isHome && !isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-brand-gray-800 hover:text-maroon'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Kontak
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-maroon rounded-full" />}
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-brand focus:outline-none transition-colors ${
            isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-brand-gray-800 hover:bg-brand-gray-100'
          }`}
          aria-label="Buka Menu Navigasi"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-white z-50 shadow-lifted flex flex-col p-6 overflow-y-auto transform transition-transform duration-300 md:hidden text-brand-gray-800 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-brand-gray-100">
          <img src={asset('/assets/logo.png')} alt="IAI Sultra" className="h-8 w-auto" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-brand hover:bg-brand-gray-100 text-brand-gray-600 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col gap-1 py-4 text-base font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-3 px-3 rounded-brand transition-colors ${
                  isActive ? 'bg-maroon-subtle text-maroon font-semibold' : 'text-brand-gray-800 hover:bg-brand-gray-100'
                }`
              }
            >
              Beranda
            </NavLink>
          </li>

          {/* Accordion Tentang */}
          <li>
            <button
              onClick={() => toggleMobileDropdown('tentang')}
              className={`w-full flex items-center justify-between py-3 px-3 rounded-brand transition-colors ${
                isTentangActive ? 'text-maroon font-semibold bg-maroon-subtle/50' : 'text-brand-gray-800 hover:bg-brand-gray-100'
              }`}
            >
              <span>Tentang</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'tentang' ? 'rotate-180 text-maroon' : ''
                }`}
              />
            </button>
            {openDropdown === 'tentang' && (
              <div className="pl-4 pr-1 py-1 flex flex-col gap-1 border-l-2 border-maroon/30 ml-3 my-1">
                <Link
                  to="/tentang/profil"
                  className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600"
                >
                  Profil Organisasi
                </Link>
                <Link
                  to="/tentang/visi-misi"
                  className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600"
                >
                  Visi & Misi
                </Link>
                <Link
                  to="/tentang/sejarah"
                  className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600"
                >
                  Sejarah
                </Link>
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/pengurus"
              className={({ isActive }) =>
                `block py-3 px-3 rounded-brand transition-colors ${
                  isActive ? 'bg-maroon-subtle text-maroon font-semibold' : 'text-brand-gray-800 hover:bg-brand-gray-100'
                }`
              }
            >
              Pengurus
            </NavLink>
          </li>

          {/* Accordion Kegiatan */}
          <li>
            <button
              onClick={() => toggleMobileDropdown('kegiatan')}
              className={`w-full flex items-center justify-between py-3 px-3 rounded-brand transition-colors ${
                isKegiatanActive ? 'text-maroon font-semibold bg-maroon-subtle/50' : 'text-brand-gray-800 hover:bg-brand-gray-100'
              }`}
            >
              <span>Kegiatan</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'kegiatan' ? 'rotate-180 text-maroon' : ''
                }`}
              />
            </button>
            {openDropdown === 'kegiatan' && (
              <div className="pl-4 pr-1 py-1 flex flex-col gap-1 border-l-2 border-maroon/30 ml-3 my-1">
                <Link
                  to="/kegiatan/program-kerja"
                  className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600"
                >
                  Program Kerja
                </Link>
                <Link
                  to="/kegiatan/berita"
                  className="block py-2 px-3 text-sm rounded-brand hover:bg-maroon-subtle hover:text-maroon text-brand-gray-600"
                >
                  Berita & Kegiatan
                </Link>
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/galeri"
              className={({ isActive }) =>
                `block py-3 px-3 rounded-brand transition-colors ${
                  isActive ? 'bg-maroon-subtle text-maroon font-semibold' : 'text-brand-gray-800 hover:bg-brand-gray-100'
                }`
              }
            >
              Galeri
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/kontak"
              className={({ isActive }) =>
                `block py-3 px-3 rounded-brand transition-colors ${
                  isActive ? 'bg-maroon-subtle text-maroon font-semibold' : 'text-brand-gray-800 hover:bg-brand-gray-100'
                }`
              }
            >
              Kontak
            </NavLink>
          </li>
        </ul>

        {/* Mobile Drawer Bottom Info */}
        <div className="mt-auto pt-6 border-t border-brand-gray-100 text-xs text-brand-gray-400">
          <p className="font-semibold text-brand-gray-800 mb-1">IAI Sulawesi Tenggara</p>
          <p>Veracity – Variety – Validity</p>
        </div>
      </div>
    </nav>
  );
}
