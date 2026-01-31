import Link from "next/link";
export default function DashboardLayout({ children }) {

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-5 space-y-4">
        <h2 className="text-xl font-bold">Dashboard</h2>

        <nav className="flex flex-col gap-3">
          <Link href="/dashboard/edit-project">Edit Project</Link>
          <Link href="/dashboard/edit-education">Edit Education</Link>
          <Link href="/dashboard/edit-about">Edit About</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  )

}