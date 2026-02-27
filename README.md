import React, { useState } from "react";

const products = [
  { id: 1, name: "Kaos Polos", price: 75000 },
  { id: 2, name: "Kemeja Flanel", price: 120000 },
  { id: 3, name: "Jaket Hoodie", price: 200000 },
  { id: 4, name: "Celana Jeans", price: 150000 },
];

export default function POS() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4">
      {/* Produk */}
      <div className="flex-1 p-4 bg-white rounded shadow m-2">
        <h2 className="text-xl font-bold mb-4">Daftar Produk</h2>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center mb-2 p-2 border rounded"
          >
            <span>{product.name}</span>
            <span>Rp {product.price.toLocaleString()}</span>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              onClick={() => addToCart(product)}
            >
              Tambah
            </button>
          </div>
        ))}
      </div>

      {/* Keranjang */}
      <div className="flex-1 p-4 bg-white rounded shadow m-2">
        <h2 className="text-xl font-bold mb-4">Keranjang</h2>
        {cart.length === 0 ? (
          <p>Keranjang kosong</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2 p-2 border rounded"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>Rp {(item.price * item.quantity).toLocaleString()}</span>
              <div>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-1"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
        <div className="mt-4 text-lg font-bold">
          Total: Rp {total.toLocaleString()}
        </div>
        <button
          className="mt-4 w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          onClick={() => alert(`Total pembayaran: Rp ${total.toLocaleString()}`)}
        >
          Bayar
        </button>
      </div>
    </div>
  );
}
