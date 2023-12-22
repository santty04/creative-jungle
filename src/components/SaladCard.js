import React from 'react';
import 'tailwindcss/tailwind.css';

const SaladCard = ({ salad, onDelete }) => {
  return (
    <div className="card bg-blue-50 m-5 p-5 rounded flex flex-col">
      <h2><strong>Nombre de la ensalada:</strong> {salad.name}</h2>
      <p><strong>Ingredientes de la ensalada: </strong>{salad.ingredients}</p>
      <p><strong>Calorías de la ensalada: </strong>{salad.calories}</p>
      <p><strong>Peso de la ensalada: </strong>{salad.weight}gr</p>
      <button className='bg-red-500 mt-3 p-3 text-white rounded hover:bg-red-700 transition-all' onClick={() => onDelete(salad.id)}>Eliminar</button>
    </div>
  );
};

export default SaladCard;