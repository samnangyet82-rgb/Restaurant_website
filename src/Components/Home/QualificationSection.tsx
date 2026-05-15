type JourneyItem = {
  title: string;
  subtitle: string;
  year: string;
};

export default function QualificationSection() {
  const education: JourneyItem[] = [
    { title: "Lorem Ipsum Dolor", subtitle: "Dignissim", year: "2020 - 2023" },
    { title: "Lorem Ipsum Dolor", subtitle: "Dignissim", year: "2020 - 2023" },
    { title: "Lorem Ipsum Dolor", subtitle: "Dignissim", year: "2020 - 2023" },
  ];

  const experience: JourneyItem[] = [
    { title: "Lorem Ipsum Dolor", subtitle: "Dignissim", year: "2020 - 2023" },
    { title: "Lorem Ipsum Dolor", subtitle: "Dignissim", year: "2020 - 2023" },
    { title: "Lorem Ipsum Dolor", subtitle: "Dignissim", year: "2020 - 2023" },
  ];

  const JourneyCard = ({ item }: { item: JourneyItem }) => (
    <div className="relative flex gap-4">
      <span className="mt-2 text-2xl font-bold text-[#ff4b00]">⚭</span>

      <div>
        <h4 className="text-[28px] font-bold leading-tight text-[#1f2a37]">
          {item.title}
        </h4>

        <p className="mt-2 text-[22px] text-[#1f2a37]">{item.subtitle}</p>

        <div className="mt-2 flex items-center gap-5">
          <span className="h-16 w-16 rounded-full bg-[#ff4b00]" />

          <span className="text-[18px] font-medium text-[#ff4b00]">
            {item.year}
          </span>
        </div>
      </div>
    </div>
  );

  const JourneyColumn = ({
    title,
    items,
  }: {
    title: string;
    items: JourneyItem[];
  }) => (
    <div>
      <h3 className="mb-6 text-[34px] font-extrabold text-[#1f2a37]">
        {title}
      </h3>

      <div className="space-y-5">
        {items.map((item, index) => (
          <JourneyCard key={index} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-white px-6 py-20 md:px-20">
      <div className="mx-auto max-w-300">
        <p className="mb-5 text-[38px] font-medium text-[#ff4b00]">
          My Qualification
        </p>

        <h2 className="mb-20 text-[52px] font-extrabold leading-tight text-[#333333] md:text-[58px]">
          Awesome Journey
        </h2>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-40">
          <JourneyColumn title="Education" items={education} />
          <JourneyColumn title="Experience" items={experience} />
        </div>
      </div>
    </section>
  );
}
