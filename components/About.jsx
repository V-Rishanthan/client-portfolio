export default function About() {
    const tools = [
        { name: "vscode", icon: "/assets/vscode.png" },
        { name: "firebase", icon: "/assets/firebase.png" },
        { name: "mongodb", icon: "/assets/mongodb.png" },
        { name: "figma", icon: "/assets/figma.png" },
        { name: "git", icon: "/assets/git.png" },
    ];

    const education = [
        {
            institute: "ESOFT Metro Campus",
            program: "BEng (Hons) in Computer Science and Software Engineering",
            partner: "London Metropolitan University",
            duration: "2023 – 2025",
        },
        {
            institute: "Vocational Training Centre",
            program: "Web Developer – NVQ Level 4",
            partner: "",
            duration: "2022 – 2023",
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg">Introduction</h4>
            <h2 className="text-center text-5xl font-semibold">About me</h2>

            <div className="flex justify-center my-14">
                <div className="max-w-3xl w-full text-center lg:text-left">
                    <p className="mb-10 text-gray-700 dark:text-white/80 leading-relaxed">
                        Passionate and detail-oriented Software Engineer with a strong foundation in web development and backend technologies.
                        Experienced in designing and developing scalable web applications and data-driven systems.
                        Quick to learn new technologies and apply them to build efficient, reliable solutions.
                        Currently expanding expertise in frontend and .NET development while seeking freelancing and software engineering opportunities.
                    </p>

                    {/* Education Section */}
                    <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                        <img src="/assets/edu-icon.png" alt="" className="w-7 dark:hidden" />
                        <img src="/assets/edu-icon-dark.png" alt="" className="w-7 hidden dark:block" />
                        <h4 className="text-gray-800 dark:text-white text-xl font-semibold">
                            Education
                        </h4>
                    </div>

                    <div className="space-y-5 mb-12">
                        {education.map((item, idx) => (
                            <div
                                key={idx}
                                className="text-left border border-gray-300 dark:border-white/30 rounded-xl p-6
                hover:bg-lightHover dark:hover:bg-darkHover/50 duration-500"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h5 className="text-lg font-semibold text-gray-800 dark:text-white">
                                            {item.institute}
                                        </h5>
                                        <p className="text-gray-600 dark:text-white/70">
                                            {item.program}
                                        </p>

                                        {item.partner ? (
                                            <p className="text-gray-500 dark:text-white/60 text-sm mt-1">
                                                {item.partner}
                                            </p>
                                        ) : null}
                                    </div>

                                    <span className="text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-white/30 text-gray-600 dark:text-white/70 whitespace-nowrap">
                                        {item.duration}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tools */}
                    <h4 className="my-6 text-gray-700 dark:text-white/80">Tools I use</h4>

                    <ul className="flex justify-center lg:justify-start items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square
                border border-gray-300 dark:border-white/30 rounded-lg
                cursor-pointer hover:-translate-y-1 duration-500"
                            >
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
