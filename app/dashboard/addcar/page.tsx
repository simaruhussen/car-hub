"use client"
import { useState } from 'react';

const AddCar = () => {
  const [carName, setCarName] = useState<string>('');
  const [carModel, setCarModel] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({ carName, carModel });
  };

  return (
    <div className='flex-col min-h-screen pt-20 pr-80'>
      <h1 className="text-2xl font-bold mb-4">Add New Car</h1>
      <form onSubmit={handleSubmit} className="space-y-4 flex-col">
        <input
          type="text"
          placeholder="Car Name"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          className="p-2 border border-gray-300 mb-4 w-1/2"
        />
        <input
          type="text"
          placeholder="Manfacturer"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          className="p-2 border border-gray-300 mb-4 w-1/2"
          
        />
        <input
          type="text"
          placeholder="Fuel Type"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          className="p-2 border border-gray-300 mb-4 w-1/2"
          
        />
        <input
          type="text"
          placeholder="Year"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          className="p-2 border border-gray-300 mb-4 w-1/2"
          
        />
        
        <input
          type="text"
          placeholder="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          className="p-2 border border-gray-300 mb-4 w-1/2"
          
        />
        <br/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Car
        </button>
      </form>
      </div>
  );
};

export default AddCar;
