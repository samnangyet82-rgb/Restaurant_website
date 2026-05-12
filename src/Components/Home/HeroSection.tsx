export default function HeroSection() {
  const stats = [
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet",
      icon: (
        <svg
          className="h-7 w-7 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 8v8M8 12h8" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet",
      icon: (
        <svg
          className="h-7 w-7 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 3v18M8 7h8" />
        </svg>
      ),
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet",
      icon: (
        <svg
          className="h-7 w-7 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" />
          <path d="M8 19v-8h8v8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      <div className="mx-auto flex min-h-195 max-w-316 items-center justify-between px-6 pt-10">
        {/* Left Content */}
        <div className="max-w-140 pt-12">
          <p className="mb-5 text-[32px] font-medium tracking-[0.12em] text-gray-800">
            Hi, I am
          </p>

          <h1 className="mb-4 text-[64px] font-extrabold leading-none tracking-wide text-gray-800 md:text-[72px]">
            Lorem Ipsum
          </h1>

          <h2 className="mb-7 text-[34px] font-semibold tracking-[0.08em] text-gray-800">
            Aliquet nibh praesent
          </h2>

          <p className="mb-9 max-w-155 text-[21px] font-medium leading-[1.55] tracking-wide text-gray-800">
            Ut sem viverra aliquet eget sit amet tellus. Nunc sed velit
            dignissim sodales ut eu sem. In tellus integer feugiat scelerisque
            varius morbi enim nunc faucibus.
          </p>

          <div className="flex flex-wrap items-center gap-8">
            <a
              href="#"
              className="rounded-[20px] bg-[#ff4500] px-12 py-4 text-[20px] font-bold tracking-wide text-white transition hover:bg-[#e63e00]"
            >
              Download CV
            </a>

            <a
              href="#"
              className="rounded-[20px] border-2 border-[#ff4500] px-14 py-3.5 text-[20px] font-bold tracking-wide text-[#ff4500] transition hover:bg-[#ff4500] hover:text-white"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden flex-1 justify-center md:flex">
          <img
            src="/img/hero-person.png"
            alt="Hero Person"
            className="mt-20 h-155 w-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="absolute bottom-18.75 left-1/2 w-[calc(100%-80px)] max-w-316 -translate-x-1/2 rounded-t-[90px] bg-white px-20 py-14 shadow-[0_-10px_40px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff4500]">
                {item.icon}
              </div>

              <div>
                <h3 className="text-[26px] font-bold tracking-wide text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-base font-medium text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orange bottom line */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#ff4500]" />
    </section>
  );
}
