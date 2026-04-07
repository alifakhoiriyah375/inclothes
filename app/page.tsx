import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F8FAFC] font-sans">
      <div className="text-center mb-12">
        <p className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-2">— Premium Syariah Clothes</p>
        <h1 className="text-6xl font-black text-slate-800 mb-4">Inclothes</h1>
        <p className="text-slate-500 text-lg">Sistem Informasi Akuntansi Penjualan</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-6">
        <Link href="/login" className="flex-1 text-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-3xl font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm">
          Masuk ke Akun
        </Link>
        <Link href="/register" className="flex-1 text-center px-8 py-4 bg-emerald-500 text-white rounded-3xl font-bold hover:bg-emerald-600 shadow-xl shadow-emerald-100 transition-all">
          Daftar Baru
        </Link>
      </div>

      <footer className="mt-20 text-slate-400 text-sm italic">
        Silahkan login untuk mengakses sistem kasir (POS)
      </footer>
    </div>
  );
}