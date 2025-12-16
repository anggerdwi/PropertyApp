import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#ff8f00] text-gray-950 backdrop-blur-md' : 'bg-transparent'
                }`}
            >
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-center">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" data-command="--toggle" data-commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center">
                            <div className="flex shrink-0 items-center">
                                <img src="logo.png" alt="Your Company" className="h-14 w-auto" />
                                <h2 className={`rounded-md px-3 py-2 text-sm font-black text-white transition-colors duration-300 ${scrolled ? ' text-white' : 'bg-transparent'
                                    }`}>JW Property</h2>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" aria-current="page" className={`rounded-md 300/50 px-3 py-2 text-sm font-bold text-white transition-colors duration-300 ${scrolled ? 'text-white' : 'bg-transparent'
                                        }`}>Home</a>
                                    <a href="#" className={`rounded-md px-3 py-2 text-sm font-bold text-white transition-colors duration-300 ${scrolled ? ' text-white' : 'bg-transparent'
                                        }`}>Services</a>
                                    <a href="#" className={`rounded-md px-3 py-2 text-sm font-bold text-white transition-colors duration-300 ${scrolled ? ' text-white' : 'bg-transparent'
                                        }`}>Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <a href="#" className={`rounded-md px-3 py-2 text-sm font-bold text-white transition-colors duration-300 ${scrolled ? ' text-white' : 'bg-transparent'
                                }`}>Login</a>
                        </div>
                    </div>
                </div>
            </nav>
  );
}
