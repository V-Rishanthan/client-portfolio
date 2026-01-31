import Link from "next/link";
export default function DashboardLayout({ children }) {

  return (
    <div className="min-h-screen flex bg-darkTheme text-white font-Outfit relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#b820e6]/20 to-transparent blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#da7d20]/10 to-transparent blur-[120px] -z-10"></div>

      <aside className="w-64 border-r border-white/10 p-5 space-y-6 bg-darkHover/30 backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/" className="text-2xl font-Ovo font-bold">M.Rikas</Link>
        </div>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Editor</h2>

        <nav className="flex flex-col gap-2">
          <Link href="/dashboard/edit-project" className="px-4 py-2 rounded-lg hover:bg-white/5 transition font-Ovo">Edit Project</Link>
          <Link href="/dashboard/edit-education" className="px-4 py-2 rounded-lg hover:bg-white/5 transition font-Ovo">Edit Education</Link>
          <Link href="/dashboard/edit-about" className="px-4 py-2 rounded-lg hover:bg-white/5 transition font-Ovo">Edit About</Link>
        </nav>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto relative z-10">{children}</main>
    </div>
  )

}