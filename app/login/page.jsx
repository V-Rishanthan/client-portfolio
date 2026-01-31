'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = (e) => {
        e.preventDefault()
        // Simple client-side simulation for now
        if (email && password) {
            router.push('/dashboard')
        }
    }

    return (
        <div className="min-h-screen bg-darkTheme text-white font-Outfit relative overflow-hidden flex items-center justify-center p-6">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#b820e6]/20 to-transparent blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#da7d20]/10 to-transparent blur-[120px] -z-10"></div>

            <div className="w-full max-w-md">
                {/* Logo / Name */}
                <div className="text-center mb-10">
                    <Link href="/" className="text-4xl font-Ovo font-bold">M.Rikas</Link>
                    <p className="text-gray-400 mt-2">Admin Control Panel</p>
                </div>

                {/* Login Card */}
                <div className="bg-darkHover/30 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                    <h2 className="text-2xl font-Ovo font-semibold mb-6 text-center">Login to your account</h2>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 outline-none focus:ring-2 ring-purple-500/50 transition"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-medium text-gray-300">Password</label>
                                <a href="#" className="text-xs text-purple-400 hover:underline">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 outline-none focus:ring-2 ring-purple-500/50 transition"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-semibold hover:scale-[1.02] transition active:scale-[0.98] shadow-lg shadow-purple-500/20"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
                        ← Back to Portfolio
                    </Link>
                </div>
            </div>
        </div>
    )
}
