import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 text-center">
      <div className="w-full max-w-2xl">
        
        {/* Judul: Tulisan POS sudah dihapus sesuai request */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-700 mb-6 tracking-tight">
          Selamat Datang di Inclothes
        </h1>
        
        {/* Sub-judul */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-md mx-auto">
          Sistem Informasi Akuntansi Penjualan
        </p>

        {/* Tombol yang mengarah ke Login */}
        <Link 
          href="/login"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-12 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-200"
        >
          Masuk ke Aplikasi
        </Link>

      </div>
    </div>
  );
}
