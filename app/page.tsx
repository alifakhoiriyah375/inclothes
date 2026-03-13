"use client";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      textAlign: "center",
      backgroundColor: "#f8fafc",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ color: "#059669", fontSize: "2.5rem", marginBottom: "20px" }}>
        Selamat Datang di Inclothes POS
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#475569" }}>
        Sistem Informasi Akuntansi Penjualan
      </p>
      <div style={{ marginTop: "30px" }}>
        <a href="/login" style={{
          padding: "12px 24px",
          backgroundColor: "#059669",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Masuk ke Aplikasi
        </a>
      </div>
    </div>
  );
}