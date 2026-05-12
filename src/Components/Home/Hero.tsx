import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Expertise", "Contact"];

  return (
    <header className="w-full border-b border-gray-200 bg-[#f7f8f8]">
      <nav className="mx-auto flex h-28 max-w-316 items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="text-[38px] font-extrabold tracking-[0.18em] text-gray-800"
        >
          RESUME
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-9 md:flex">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[21px] font-medium text-gray-900 transition hover:text-orange-600"
            >
              {item}
            </a>
          ))}

          {/* <a
            href="#"
            className="flex items-center gap-2 text-[21px] font-medium text-gray-900 transition hover:text-orange-600"
          >
            Pages
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a> */}
          {/* Pages Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-2 text-[21px] font-medium text-gray-900 transition hover:text-orange-600">
              Pages
              <svg
                className="h-4 w-4 transition group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="invisible absolute left-0 top-full z-50 mt-4 w-48 rounded-xl bg-white py-3 opacity-0 shadow-lg ring-1 ring-gray-100 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="#"
                className="block px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
              >
                Portfolio
              </a>

              <a
                href="#"
                className="block px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
              >
                Blog
              </a>

              <a
                href="#"
                className="block px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
              >
                Resume
              </a>

              <a
                href="#"
                className="block px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
              >
                Projects
              </a>
            </div>
          </div>
        </div>

        {/* Hire Button */}
        <a
          href="#"
          className="hidden rounded-[22px] bg-[#ff4500] px-11 py-3 text-[20px] font-semibold text-white transition hover:bg-[#e63e00] md:inline-flex"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 text-gray-800 hover:bg-gray-200"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium text-gray-900 hover:text-orange-600"
              >
                {item}
              </a>
            ))}

            <a
              href="#"
              className="flex items-center gap-2 text-lg font-medium text-gray-900 hover:text-orange-600"
            >
              Pages
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

            <a
              href="#"
              className="mt-2 w-fit rounded-[22px] bg-[#ff4500] px-8 py-3 text-lg font-semibold text-white hover:bg-[#e63e00]"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
