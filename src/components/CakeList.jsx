import React, { useEffect, useState, useCallback } from "react";
import { API_URL } from "../api.js";

export default function CakeList() {
  const [cakes, setCakes] = useState([]);

  async function deleteCake(id) {
    const res = await fetch(`${API_URL}/cake/delete.php`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    const result = await res.json();
    alert(result.message);
    loadData();
  }

  const loadData = useCallback(async () => {
    const res = await fetch(`${API_URL}/cake/read.php`);
    const data = await res.json();
    setCakes(data.data);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <h2>Daftar Cake</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Gambar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {cakes.map((cake) => (
            <tr key={cake.id}>
              <td>{cake.name}</td>
              <td>{cake.price}</td>
              <td>
                {cake.image && (
                  <img src={`${API_URL}/uploads/${cake.image}`} width="80" />
                )}
              </td>
              <td>
                <button onClick={() => deleteCake(cake.id)}>Hapus</button>

                <a
                  href={`${API_URL}/cake/download.php?file=${cake.image}`}
                  style={{ marginLeft: 10 }}
                >
                  <button>Download</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
