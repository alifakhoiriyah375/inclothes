import React from 'react';

const Login = () => {
    const ethicalReminders = [
        "Give full measure when you measure, and weigh with an even balance.",
        "The honest and trustworthy merchant will be with the prophets.",
        "O you who have believed, do not consume one another's wealth unjustly."
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-emerald-800">Barakah POS</h2>
                    <p className="text-slate-500 mt-2 text-sm italic">
                        "{ethicalReminders[Math.floor(Math.random() * ethicalReminders.length)]}"
                    </p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Work Email</label>
                        <input type="email" className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" placeholder="merchant@barakah.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Password</label>
                        <input type="password" className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" placeholder="••••••••" />
                    </div>
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-emerald-200">
                        Begin Session
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;