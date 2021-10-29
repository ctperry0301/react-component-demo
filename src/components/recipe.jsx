import React from "react";
import './recipe.css'

export default function Recipe({name, img, desc}) {
  return (
    <div className="outline">
      <h3>{name}</h3>
        <div class="display">
          <img width="200px" src={img} alt="Pasta img"/>
          <p> {desc}</p>
      </div>
    </div>
  );
}