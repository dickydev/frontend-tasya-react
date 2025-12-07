import React, { useState } from "react";
import { API_URL } from "../api.js";

export default function EditModal({ cake, onClose, reload }) {
  const [name, setName] = useState(cake.name);
  const [price, setPrice] = useState(cake.price);

  async function handleUpdate() {
    const response = await fetch(`${API_URL}/cake/update.php`, {
      method: "PUT",
      body: JSON.stringify({
        id: cake.id,
        name,
        price,
      }),
    });

    const result = await response.json();
    alert(result.message);
    reload();
    onClose();
  }

  return (
    <div style={{ background: "#eee", padding: 20, marginTop: 20 }}>
      <h3>Edit Cake</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <br />

      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose} style={{ marginLeft: 10 }}>
        Batal
      </button>
    </div>
  );
}
