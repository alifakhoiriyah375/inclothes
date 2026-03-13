"use client";
import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Selamat Datang</h1>
          <p className="text-slate-500">Silakan masuk ke akun SIA Anda</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-800"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-800"
              placeholder="••••••••"
            />
          </div>

          {/* Tombol Masuk - Langsung Link ke /pos */}
          <a 
            href="/pos" 
            className="w-full block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-emerald-200"
          >
            MASUK
          </a>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-sm text-slate-500">
          Belum punya akun? <a href="/register" className="text-emerald-600 font-semibold hover:underline">Daftar</a>
        </p>
      </div>
    </div>
  );
}
