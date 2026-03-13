import React, { useState } from 'react';

const POSInput = () => {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'Premium Ajwa Dates', price: 25.00 },
        { id: 2, name: 'Organic Honey', price: 15.50 },
        { id: 3, name: 'Miswak Pack', price: 5.00 },
    ];

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const zakat = subtotal * 0.025; // 2.5% Calculation

    return (
        <div className="flex h-screen bg-slate-100 font-sans">
            {/* Product Grid */}
            <div className="flex-1 p-6 grid grid-cols-3 gap-4 content-start overflow-y-auto">
                {products.map(product => (
                    <button
                        key={product.id}
                        onClick={() => setCart([...cart, product])}
                        className="h-32 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center hover:border-emerald-500 hover:shadow-md transition group"
                    >
                        <span className="font-semibold text-slate-800 group-hover:text-emerald-700">{product.name}</span>
                        <span className="text-emerald-600">${product.price.toFixed(2)}</span>
                    </button>
                ))}
            </div>

            {/* Checkout Sidebar */}
            <div className="w-96 bg-white shadow-2xl flex flex-col border-l border-slate-200">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-800">Current Order</h2>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] uppercase px-2 py-1 rounded-full font-bold tracking-widest">
                        Sharia Compliant
                    </span>
                </div>

                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                    {cart.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                            <span className="text-slate-600">{item.name}</span>
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="p-6 bg-slate-50 border-t space-y-3">
                    <div className="flex justify-between text-slate-600">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-emerald-700 font-medium">
                        <span>Zakat/Sadaqah (2.5%)</span>
                        <span>+${zakat.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-black text-slate-900 pt-2 border-t">
                        <span>Total</span>
                        <span>${(subtotal + zakat).toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 mt-4 shadow-lg">
                        Complete Transaction
                    </button>
                </div>
            </div>
        </div>
    );
};

export default POSInput;