"use client";
import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Selamat Datang</h1>
          <p className="text-slate-500 text-sm">Silahkan masuk untuk mengelola amanah hari ini</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email / Username</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              placeholder="alifakhoiriyah375@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              placeholder="••••••••••••••••"
            />
          </div>

          {/* Opsi Tambahan */}
          <div className="flex justify-between items-center text-xs text-slate-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-emerald-600" /> Ingat saya
            </label>
            <a href="#" className="text-emerald-600 hover:underline">Lupa Password?</a>
          </div>

          {/* Tombol Masuk */}
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-emerald-100">
            Masuk (Bismillah)
          </button>

          {/* PINTU REGISTER (Ini yang baru kamu minta) */}
          <div className="text-center mt-4">
            <p className="text-sm text-slate-600">
              Belum punya akun?{' '}
              <Link href="/register" className="text-emerald-600 font-bold hover:underline">
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </div>

        {/* Reminder Box */}
        <div className="mt-8 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
          <h4 className="text-emerald-800 font-bold text-xs mb-1 uppercase tracking-wider">
            Pengingat Shiddiq (Kejujuran)
          </h4>
          <p className="text-emerald-700 text-[11px] leading-relaxed">
            Rasulullah SAW bersabda: "Pedagang yang jujur dan terpercaya akan bersama para Nabi, orang-orang shiddiq, dan para syuhada." (HR. Tirmidzi)
          </p>
        </div>
      </div>
    </div>
  );
}
