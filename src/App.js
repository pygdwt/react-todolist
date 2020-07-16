import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
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
        </section>
      </div>
    </div>
  );
}
