export default function Header() {
    return (
        <div className="w-11/12 max-w-7xl mx-auto h-screen flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 lg:pt-0">
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col items-start gap-6 mt-10">
                <h3 className="flex items-end gap-2 text-xl md:text-2xl font-Ovo">
                    Hi! I'm Mohamed Rikas
                    <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
                </h3>
                {/* <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-Ovo leading-tight"> */}
                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-Ovo leading-tight">
                    Software Engineer
                </h1>
                <p className="max-w-xl font-Ovo text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                    I am a software developer from Sri Lanka, focused on building reliable and user-friendly digital solutions.
                </p>



                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <a href="#contact"
                        className="px-10 py-3.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent hover:shadow-lg transition-all duration-300">
                        contact me <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                    </a>

                    <a href="../../dev-icon.png" download
                        className="px-10 py-3.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white transition-all duration-300">
                        my resume <img src="/assets/download-icon.png" alt="" className="w-4 dark:invert" />
                    </a>
                </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-14">
                <div className="relative">
                    {/* Decorative background element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#b820e6]/20 to-[#da7d20]/20 rounded-full blur-3xl -z-10"></div>

                    <img
                        src="/assets/profile-img.png"
                        alt="Eliana Jade Profile"
                        className="rounded-3xl w-72 md:w-[400px] lg:w-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)] transform hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    )
}