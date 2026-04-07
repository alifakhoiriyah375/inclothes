"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        if (nama && email && password) {
            alert("Akun Berhasil Dibuat!");
            router.push('/login');
        } else {
            alert("Isi semua datanya dulu ya!");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-emerald-600 mb-2">Daftar Akun</h1>
                    <p className="text-slate-500 text-sm">Silahkan buat akun pembeli kamu</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full px-4 py-3 rounded-lg border" placeholder="Nama Lengkap" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border" placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg border" placeholder="Password" />

                    <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg shadow-lg">
                        Daftar Sekarang
                    </button>

                    <div className="text-center mt-6 pt-4 border-t">
                        <p className="text-sm text-slate-600">
                            Sudah punya akun?{' '}
                            <button type="button" onClick={() => router.push('/login')} className="text-emerald-600 font-bold hover:underline">
                                Masuk di sini
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}