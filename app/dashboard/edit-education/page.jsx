export default function EditEducation() {
    return (
        <div className="max-w-2xl">
            <h1 className="text-3xl font-Ovo font-bold mb-8">Edit Education</h1>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">University Name</label>
                    <input type="text" placeholder="e.g. Stanford University" className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 outline-none focus:ring-2 ring-purple-500/50 transition" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Subject / Degree</label>
                    <input type="text" placeholder="e.g. Bachelor of Computer Science" className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 outline-none focus:ring-2 ring-purple-500/50 transition" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Year Start</label>
                        <input type="number" placeholder="2020" className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 outline-none focus:ring-2 ring-purple-500/50 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Year End</label>
                        <input type="number" placeholder="2024" className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 outline-none focus:ring-2 ring-purple-500/50 transition" />
                    </div>
                </div>
                <button type="submit" className="px-8 py-3 bg-white text-black rounded-full font-Ovo hover:scale-105 transition active:scale-95">
                    Save Education
                </button>
            </form>
        </div>
    );
}
