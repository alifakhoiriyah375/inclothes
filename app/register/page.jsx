"use client";
import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({ businessName: '', email: '', category: 'Halal Food' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registering ${formData.businessName}...`);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-slate-100">
                <div className="bg-emerald-600 p-6 text-white text-center">
                    <h3 className="text-xl font-bold">Join the Ethical Marketplace</h3>
                    <p className="text-emerald-100 text-sm">Register your business in minutes</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700">Business Name</label>
                        <input required type="text" onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full mt-1 p-2.5 border border-slate-300 rounded-md focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700">Business Category</label>
                        <select className="w-full mt-1 p-2.5 border border-slate-300 rounded-md bg-white">
                            <option>Halal Food & Beverage</option>
                            <option>Modest Fashion</option>
                            <option>Islamic Services</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700">Admin Email</label>
                        <input required type="email" className="w-full mt-1 p-2.5 border border-slate-300 rounded-md outline-none" />
                    </div>
                    <div className="flex items-start gap-2 py-2">
                        <input type="checkbox" required className="mt-1 accent-emerald-600" />
                        <span className="text-xs text-slate-500">I agree to abide by Sharia-compliant trade principles and fair pricing.</span>
                    </div>
                    <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-md hover:bg-slate-800 transition">
                        Create Merchant Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;