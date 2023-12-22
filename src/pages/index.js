import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const goToSaladsPage = () => {
    router.push('/salads');
  };
  const goToFruitsPage = () => {
    router.push('/fruits');
  };
  
  return (
    <div className="bg-blue-100 container mx-auto mt-8 flex items-center justify-center h-screen flex-col rounded-xl">
      <h1 className="text-4xl font-bold mb-8">¡Bienvenido a mi proyecto!</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded transition-all">
        <a href="#" onClick={goToSaladsPage} className="text-white-500 no-underline"> Ir a la página de ensaladas 🥗</a>
      </button>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded transition-all">
        <a href="#" onClick={goToFruitsPage} className="text-white-500 no-underline"> Ir a la página de frutas 🍎</a>
      </button>
    </div>
  );
};

export default HomePage;
