import React from "react";
import CakeForm from "./components/CakeForm.jsx";
import CakeList from "./components/CakeList.jsx";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dapur Sahda - Cake Manager</h1>
      <CakeForm />
      <CakeList />
    </div>
  );
}
