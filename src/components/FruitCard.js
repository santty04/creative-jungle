import React from 'react';
import 'tailwindcss/tailwind.css';

const FruitCard = ({ fruit, onDelete }) => {
  return (
    <div className="card bg-blue-50 m-5 p-5 rounded flex flex-col">
      <h2><strong>Nombre de la fruta:</strong> {fruit.name}</h2>
      <p><strong>Descripción de la fruta: </strong>{fruit.description}</p>
      <p><strong>Maduración de la fruta: </strong>{fruit.maduration}</p>
      <button className='bg-red-500 mt-3 p-3 text-white rounded hover:bg-red-700 transition-all' onClick={() => onDelete(fruit.id)}>Eliminar</button>
    </div>
  );
};

export default FruitCard;