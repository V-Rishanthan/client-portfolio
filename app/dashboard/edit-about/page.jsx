export default function EditAbout() {
    return (
        <div className="max-w-2xl">
            <h1 className="text-3xl font-Ovo font-bold mb-8">Edit About</h1>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">About Description</label>
                    <textarea rows="10" placeholder="Describe yourself, your passion, and your journey..." className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 outline-none focus:ring-2 ring-purple-500/50 transition"></textarea>
                </div>
                <button type="submit" className="px-8 py-3 bg-white text-black rounded-full font-Ovo hover:scale-105 transition active:scale-95">
                    Save About
                </button>
            </form>
        </div>
    );
}
