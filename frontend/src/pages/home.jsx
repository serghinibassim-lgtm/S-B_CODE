import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Progression d\'apprentissage',
        data: [20, 35, 50, 65, 80, 95],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Votre progression d\'apprentissage',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
   


      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Bienvenue sur votre plateforme d'apprentissage</h1>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Cours</h2>
            <p className="text-gray-600 mb-4">Accédez à vos cours en ligne.</p>
            <Link to="/cours" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Voir les cours</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">QSM</h2>
            <p className="text-gray-600 mb-4">Testez vos connaissances avec des QSM.</p>
            <Link to="/qsm" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Faire un QSM</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Mathématiques</h2>
            <p className="text-gray-600 mb-4">Explorez les mathématiques.</p>
            <Link to="/mathematique" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Voir les maths</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Informatique</h2>
            <p className="text-gray-600 mb-4">Découvrez l'informatique.</p>
            <Link to="/informatique" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Voir l'informatique</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Physique</h2>
            <p className="text-gray-600 mb-4">Étudiez la physique.</p>
            <Link to="/physique" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Voir la physique</Link>
          </div>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Home;
