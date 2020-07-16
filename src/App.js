import React from "react";
import "./styles.css";

import Paper from "./components/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="btn-header add-color">Add</button>
        <h1 className="judul-header">ToDo List</h1>
        <button className="btn-header clear-color">Clear</button>
      </section>

      <section className="add">
        <form className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">Sarapan</span>
        </div>
        <div className="todo">
          <span className="todo-text">Makan Siang</span>
        </div>
        <div className="todo">
          <span className="todo-text">Makan Malam</span>
        </div>
      </section>
    </Paper>
  );
}
