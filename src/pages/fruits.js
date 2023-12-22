import React, { useState } from "react";
import FruitCard from "../components/FruitCard";
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const FruitsPage = () => {
  const router = useRouter();

  const goToSaladsPage = () => {
    router.push('/salads');
  };

  console.log("No recargar");
  
  const [fruits, setFruits] = useState([]);
  const [newFruitName, setNewFruitName] = useState("");
  const [newFruitDescription, setNewFruitDescription] = useState("");
  const [newFruitMaduration, setNewFruitMaduration] = useState("");

  useEffect(() => {
    const storedFruits = JSON.parse(localStorage.getItem('fruits')) || [];
    setFruits(storedFruits);
  }, []);

  const updateLocalStorage = (updatedFruits) => {
    localStorage.setItem('fruits', JSON.stringify(updatedFruits));
  };
  
  const removeFruit = (id) => {
    const updatedFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(updatedFruits);
    updateLocalStorage(updatedFruits);
  };

  const addFruit = () => {
    if (newFruitName && newFruitDescription && newFruitMaduration) {
      const newFruit = {
        id: new Date().getTime(), 
        name: newFruitName,
        description: newFruitDescription,
        maduration: newFruitMaduration
      };

      const updatedFruits = [...fruits, newFruit];
      setFruits(updatedFruits);
      updateLocalStorage(updatedFruits);

      setNewFruitName("");
      setNewFruitDescription("");
      setNewFruitMaduration("");
    }
  };

  return (
    <div className="container mx-auto mt-8 flex items-center justify-center flex-col">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded transition-all">
        <a href="#" onClick={goToSaladsPage} className="text-white-500 no-underline"> Ir a la pagina de ensaladas 🥗</a>
      </button>
      <h1 className="text-4xl font-bold mb-8">Frutas</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre de la fruta:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="text"
          value={newFruitName}
          onChange={(e) => setNewFruitName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Maduración de la fruta:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="text"
          value={newFruitMaduration}
          onChange={(e) => setNewFruitMaduration(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Descripción de la fruta:
        </label>
        <textarea
          className="border rounded py-2 px-3"
          value={newFruitDescription}
          onChange={(e) => setNewFruitDescription(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
        onClick={addFruit}
      >
        Agregar Fruta
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} onDelete={removeFruit} />
        ))}
      </div>
    </div>
  );
};

export default FruitsPage;
