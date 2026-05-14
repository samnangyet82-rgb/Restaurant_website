type Work = {
  image: string;
  title: string;
  desc: string;
};

export default function PortfolioSection() {
  const works: Work[] = [
    {
      image: "/img/ui-design.jpg",
      title: "UI Design",
      desc: "In tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
    },
    {
      image: "/img/web-design.jpg",
      title: "Web Design",
      desc: "In tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
    },
    {
      image: "/img/graphic-design.jpg",
      title: "Graphic Design",
      desc: "In tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
    },
    {
      image: "/img/content-writing.jpg",
      title: "Content Writing",
      desc: "In tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:px-14">
      <div className="mx-auto max-w-340">
        <p className="mb-5 text-[38px] font-medium text-[#ff4b00]">
          My Portfolio
        </p>

        <h2 className="mb-16 text-[52px] font-extrabold leading-tight text-[#333333] md:text-[58px]">
          Recent Works
        </h2>

        <div className="grid grid-cols-1 gap-x-20 gap-y-14 lg:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[285px_1fr]"
            >
              <img
                src={work.image}
                alt={work.title}
                className="h-47 w-full object-cover sm:w-71.25"
              />

              <div>
                <h3 className="mb-5 text-[34px] font-extrabold leading-tight text-[#1f2a37]">
                  {work.title}
                </h3>

                <p className="max-w-105 text-[21px] leading-normal text-black">
                  {work.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
