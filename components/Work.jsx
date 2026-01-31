import { Github, ExternalLink } from 'lucide-react';

export default function Work() {
    const projects = [
        {
            title: 'School Management System',
            description: 'A comprehensive system for managing school operations.',
            image: '/assets/work-1.png',
            tags: ['React', 'Node.js', 'MySQL'],
            gitLink: 'https://github.com',
            demoLink: '#',
        },
        {
            title: 'Portfolio Website',
            description: 'Modern portfolio built with Next.js and Tailwind CSS.',
            image: '/assets/work-2.png',
            tags: ['Next.js', 'Tailwind', 'Framer Motion'],
            gitLink: 'https://github.com',
            demoLink: '#',
        },
        {
            title: 'E-commerce App',
            description: 'Full-stack application with payment integration.',
            image: '/assets/work-3.png',
            tags: ['React Native', 'Firebase', 'Stripe'],
            gitLink: 'https://github.com',
            demoLink: '#',
        },
        {
            title: 'Data Dashboard',
            description: 'Visualization tool for complex data analysis.',
            image: '/assets/work-4.png',
            tags: ['Python', 'PowerBI', 'SQL'],
            gitLink: 'https://github.com',
            demoLink: '#',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Explore my recent projects, showcasing technical expertise across web development, desktop applications, and data analysis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-darkHover/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                    >
                        {/* Project Image */}
                        <div className="aspect-video w-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Project Info Overlay / Bottom Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.gitLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <Github size={20} className="text-gray-700 dark:text-white" />
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <ExternalLink size={20} className="text-gray-700 dark:text-white" />
                                    </a>
                                </div>
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/60 border border-gray-200 dark:border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}