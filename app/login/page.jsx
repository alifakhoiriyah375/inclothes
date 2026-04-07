"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Cek simpel: kalau diisi apa saja, boleh masuk ke POS
        if (email && password) {
            router.push('/pos');
        } else {
            alert("Silakan isi email dan password terlebih dahulu!");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">

                {/* Header Hijau */}
                <div className="bg-emerald-600 p-8 text-center text-white">
                    <h1 className="text-3xl font-bold mb-2">Inclothes POS</h1>
                    <p className="italic text-sm opacity-90">"Berperilaku jujur adalah kunci keberkahan dalam berniaga."</p>
                </div>

                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-800">Selamat Datang</h2>
                        <p className="text-slate-500 text-sm">Silahkan masuk untuk mengelola amanah hari ini</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email / Username</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 bg-yellow-50/30"
                                placeholder="alifakhoiriyah375@gmail.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 bg-yellow-50/30"
                                placeholder="••••••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg mt-2"
                        >
                            Masuk (Bismillah)
                        </button>
                    </form>

                    {/* TOMBOL KE REGISTER - PASTIKAN SEPERTI INI */}
                    <div className="text-center mt-6 pt-6 border-t border-slate-100">
                        <p className="text-sm text-slate-600">
                            Belum punya akun?{' '}
                            <Link href="/register" className="text-emerald-600 font-bold hover:underline cursor-pointer">
                                Daftar di sini
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}