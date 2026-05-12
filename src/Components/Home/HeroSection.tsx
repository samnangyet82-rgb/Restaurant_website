export default function HeroSection() {
  const infoCards = [
    {
      title: "Lorem Ipsum",
      text: "Experience",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8 14h8v7l-4-2-4 2v-7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Lorem Ipsum",
      text: "Completed",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3v18M8 7h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Lorem Ipsum",
      text: "Online 27/7",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12a7 7 0 0 1 14 0v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 16v-3h3v6H7a2 2 0 0 1-2-2v-1ZM19 16v-3h-3v6h1a2 2 0 0 0 2-2v-1Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Top */}
      <section className="relative bg-[#f7f7f7] pb-[140px]">
        <div className="mx-auto grid min-h-[610px] max-w-[1180px] grid-cols-1 items-center px-6 pt-10 md:grid-cols-2 lg:px-0">
          {/* Left Text */}
          <div className="z-10 pt-10">
            <p className="mb-3 text-[30px] font-medium tracking-[0.08em] text-[#2b2f33]">
              Hi, I am
            </p>

            <h1 className="mb-4 text-[52px] font-extrabold leading-none tracking-[0.04em] text-[#2b2f33] md:text-[64px]">
              Lorem Ipsum
            </h1>

            <h2 className="mb-5 text-[30px] font-semibold tracking-[0.06em] text-[#2b2f33] md:text-[34px]">
              Aliquet nibh praesent
            </h2>

            <p className="mb-8 max-w-[560px] text-[18px] font-medium leading-[1.6] tracking-wide text-[#2b2f33]">
              Ut sem viverra aliquet eget sit amet tellus. Nunc sed velit
              dignissim sodales ut eu sem. In tellus integer feugiat scelerisque
              varius morbi enim nunc faucibus.
            </p>

            <div className="flex flex-wrap items-center gap-7">
              <a
                href="#"
                className="rounded-[18px] bg-[#ff4500] px-9 py-3 text-[17px] font-bold tracking-wide text-white transition duration-300 hover:bg-[#e83f00]"
              >
                Download CV
              </a>

              <a
                href="#"
                className="rounded-[18px] border-2 border-[#ff4500] px-12 py-2.5 text-[17px] font-bold tracking-wide text-[#ff4500] transition duration-300 hover:bg-[#ff4500] hover:text-white"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden h-full items-end justify-center md:flex">
            <img
              src="/img/hero-person.png"
              alt="Hero Person"
              className="h-140 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Orange Section */}
      <section className="relative bg-gradient-to-br from-[#ff6a1a] via-[#ff5200] to-[#ee3f00] pt-[150px] pb-24">
        {/* Floating Info Box */}
        <div className="absolute left-1/2 top-[-105px] z-20 w-[calc(100%-40px)] max-w-[1060px] -translate-x-1/2 rounded-[70px] bg-white px-10 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:px-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {infoCards.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#ff4500] text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-[22px] font-bold tracking-wide text-[#1f2933]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[16px] font-medium tracking-wide text-[#ff4500]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute right-24 top-20 h-64 w-96 rotate-12 rounded-3xl border border-white" />
          <div className="absolute left-36 top-40 h-56 w-56 rounded-full border-[10px] border-white" />
        </div>

        {/* About Content */}
        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 pt-10 text-white md:grid-cols-2 lg:px-0">
          {/* Left Image - Smaller Normal Size */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border-[6px] border-white bg-white shadow-xl md:h-[400px] md:w-[400px]">
              <img
                src="/img/about-person.png"
                alt="About Person"
                className="absolute bottom-0 left-1/2 h-[390px] w-auto -translate-x-1/2 object-contain md:h-[460px]"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="max-w-[620px]">
            <p className="mb-4 text-[28px] font-bold tracking-[0.08em]">
              My Intro
            </p>

            <h2 className="mb-8 text-[48px] font-extrabold leading-tight tracking-wide md:text-[56px]">
              About Me
            </h2>

            <p className="mb-8 text-[20px] font-medium leading-[1.7] tracking-wide text-white/95">
              Faucibus purus in massa tempor nec feugiat nisl pretium. Phasellus
              faucibus scelerisque eleifend donec pretium vulputate. Condimentum
              id venenatis a condimentum vitae sapien.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#ff4500] text-white">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Zm0 2c-3.314 0-10 1.657-10 5v3h20v-3c0-3.343-6.686-5-10-5Z" />
                  </svg>
                </div>
                <span className="text-[20px] font-semibold">Lorem Ipsum</span>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#ff4500] text-white">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.01l-2.21 2.2Z" />
                  </svg>
                </div>
                <span className="text-[20px] font-semibold">
                  123 – 456 – 789 – 012
                </span>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#ff4500] text-white">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                  </svg>
                </div>
                <span className="text-[20px] font-semibold">
                  info@loremipsum.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
