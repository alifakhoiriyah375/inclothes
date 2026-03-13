"use client";
import React from 'react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Islamic Ethics Header */}
                <div className="bg-emerald-600 p-6 text-white text-center">
                    <h1 className="text-2xl font-bold mb-1">Inclothes POS</h1>
                    <p className="text-emerald-100 text-sm italic">
                        "Berperilaku jujur adalah kunci keberkahan dalam berniaga."
                    </p>
                </div>

                <div className="p-8">
                    <div className="mb-8 text-center">
                        <h2 className="text-xl font-semibold text-slate-800">Selamat Datang</h2>
                        <p className="text-slate-500 text-sm">Silahkan masuk untuk mengelola amanah hari ini</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email / Username</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                placeholder="Masukkan email Anda"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-slate-600 cursor-pointer">
                                <input type="checkbox" className="mr-2 rounded text-emerald-600 focus:ring-emerald-500" />
                                Ingat saya
                            </label>
                            <a href="#" className="text-emerald-600 hover:underline">Lupa Password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-emerald-200"
                        >
                            Masuk (Bismillah)
                        </button>
                    </form>

                    {/* Ethics Reminder Section */}
                    <div className="mt-8 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                        <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-1">Pengingat Shiddiq (Kejujuran)</h3>
                        <p className="text-xs text-emerald-700 leading-relaxed">
                            Rasulullah SAW bersabda: "Pedagang yang jujur dan terpercaya akan bersama para Nabi, orang-orang shiddiq, dan para syuhada." (HR. Tirmidzi)
                        </p>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-slate-400 text-xs">© 2026 Inclothes - Sistem Informasi Akuntansi Syariah</p>
        </div>
    );
}