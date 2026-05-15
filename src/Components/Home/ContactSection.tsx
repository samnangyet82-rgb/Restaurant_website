export default function ContactSection() {
  return (
    <section className="relative flex min-h-107.5 items-center justify-center overflow-hidden bg-orange-600 px-4 py-20">
      {/* Background Image */}
      <img
        src="/image/xresch.jpg"
        alt="Contact background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Orange Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <h3 className="mb-3 text-[30px] font-bold">More Portfolio</h3>

        <h2 className="mb-8 text-[54px] font-extrabold leading-tight">
          Contact Me
        </h2>

        <p className="mx-auto mb-8 max-w-4xl text-[22px] font-medium leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br className="hidden md:block" />
          incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Form */}
        <form className="mx-auto flex max-w-160 flex-col items-center justify-center gap-6 sm:flex-row">
          <input
            type="email"
            placeholder="Insert Email here..."
            className="h-13 w-full rounded-full border border-gray-300 bg-white px-5 text-[18px] text-gray-700 outline-none placeholder:text-gray-300 sm:w-121.25"
          />

          <button
            type="submit"
            className="h-10.5 rounded-full bg-white px-8 text-[18px] font-bold text-orange-600 transition hover:bg-orange-100"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
