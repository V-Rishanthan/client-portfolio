export default function Services() {
    const services = [
        {
            name: 'Web Application',
            icon: '/assets/web-icon.png',
            description: 'Front-end: HTML, CSS, JS, React.',
            link: '#',
        },
        {
            name: 'Desktop Application',
            icon: '/assets/mobile-icon.png',
            description: 'Java, .NET, C#, SQL Server.',
            link: '#',
        },
        {
            name: 'Data Analysis',
            icon: '/assets/graphics-icon.png',
            description: 'Python, MS Excel, PowerBI.',
            link: '#',
        },
        {
            name: 'Backend & Databases',
            icon: '/assets/web-icon.png',
            description: 'Node JS, .NET, MySQL, MongoDB.',
            link: '#',
        },
        {
            name: 'Languages',
            icon: '/assets/web-icon.png',
            description: 'Java, Python, HTML, CSS, JavaScript.',
            link: '#',
        },
        {
            name: 'Design Tools',
            icon: '/assets/ui-icon.png',
            description: 'Adobe Photoshop, Dreamweaver.',
            link: '#',
        },
        {
            name: 'Professional Skills',
            icon: '/assets/ui-icon.png',
            description: 'Problem Solving, Team Player, Good Communication.',
            link: '#',
        }
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Technical Skills</h4>
            <h2 className="text-center text-5xl font-Ovo">My Expertise</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am a passionate Software Engineer with expertise in web and desktop applications, data analysis, and modern development tools.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">
                            Read more <img src="/assets/right-arrow.png" alt="" className="w-4" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}