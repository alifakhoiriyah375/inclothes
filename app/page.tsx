import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <h1 className="text-4xl font-black text-slate-800 mb-2">Inclothes</h1>
      <p className="text-slate-500 mb-8">Premium Syariah Clothes System</p>
      <div className="flex gap-4">
        <Link href="/login" className="px-8 py-3 bg-white border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
          Masuk
        </Link>
        <Link href="/register" className="px-8 py-3 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 shadow-lg shadow-emerald-100 transition-all">
          Daftar Akun
        </Link>
      </div>
    </div>
  );
}