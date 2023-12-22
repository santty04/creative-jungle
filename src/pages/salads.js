import React, { useState } from "react";
import SaladCard from "../components/SaladCard";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

const SaladsPage = () => {

  const router = useRouter();
  const goToFruitsPage = () => {
    router.push('/fruits');
  };

  const [salads, setSalads] = useState([]);
  const [newSaladName, setNewSaladName] = useState("");
  const [newSaladIngredients, setNewSaladIngredients] = useState("");
  const [newSaladCalories, setNewSaladCalories] = useState("");
  const [newSaladWeightGrams, setNewSaladWeightGrams]= useState("");

  useEffect(() => {
    const storedSalads = JSON.parse(localStorage.getItem('salads')) || [];
    setSalads(storedSalads);
  }, []);

  const updateLocalStorage = (updatedSalads) => {
    localStorage.setItem('salads', JSON.stringify(updatedSalads));
  };

  const removeSalad = (id) => {
    const updatedSalads = salads.filter((salad) => salad.id !== id);
    setSalads(updatedSalads);
    updateLocalStorage(updatedSalads);
  };

  const addSalad = () => {
    if (newSaladName && newSaladIngredients && newSaladCalories && newSaladWeightGrams) {
      const newSalad = {
        id: new Date().getTime(), 
        name: newSaladName,
        ingredients: newSaladIngredients,
        calories: newSaladCalories,
        weight: newSaladWeightGrams
      };

      const updatedSalads = [...salads, newSalad];
      setSalads(updatedSalads);
      updateLocalStorage(updatedSalads);

      setNewSaladName("");
      setNewSaladIngredients("");
      setNewSaladCalories("");
      setNewSaladWeightGrams("");
    }
  };

  return (
    <div className="container mx-auto mt-8 flex items-center justify-center flex-col">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded transition-all">
        <a href="#" onClick={goToFruitsPage} className="text-white-500 no-underline"> Ir a la pagina de frutas 🍎</a>
      </button>
      <h1 className="text-4xl font-bold mb-8">Ensaladas</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre de la ensalada:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="text"
          value={newSaladName}
          onChange={(e) => setNewSaladName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ingredientes de la ensalada:
        </label>
        <textarea
          className="border rounded py-2 px-3"
          value={newSaladIngredients}
          onChange={(e) => setNewSaladIngredients(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Calorías de la ensalada:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="number"
          value={newSaladCalories}
          onChange={(e) => setNewSaladCalories(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Peso en gramos de la ensalada:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="number"
          value={newSaladWeightGrams}
          onChange={(e) => setNewSaladWeightGrams(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
        onClick={addSalad}
      >
        Agregar ensalada
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {salads.map((salad) => (
          <SaladCard key={salad.id} salad={salad} onDelete={removeSalad} />
        ))}
      </div>
    </div>
  );
};

export default SaladsPage;
