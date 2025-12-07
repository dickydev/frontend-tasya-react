import React, { useState } from "react";
import { API_URL } from "../api.js";

export default function CakeForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !price) {
      alert("Nama dan harga wajib diisi!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    if (image) formData.append("image", image);

    const res = await fetch(`${API_URL}/cake/create.php`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    alert(result.message);
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
      <input
        type="text"
        placeholder="Nama Kue"
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <input
        type="number"
        placeholder="Harga"
        onChange={(e) => setPrice(e.target.value)}
      />{" "}
      <br />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} /> <br />
      <button type="submit">Tambah</button>
    </form>
  );
}
