"use client"
import { useState } from 'react';

const DeleteCar = () => {
  const [carId, setCarId] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({ carId });
  };

  return (
    <div className='flex-col min-h-screen pt-20 pr-80'>
      <h1 className="text-2xl font-bold mb-4">Delete Existing Car</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Car ID"
          value={carId}
          onChange={(e) => setCarId(e.target.value)}
          className="p-2 border border-gray-300 mb-4 w-full"
        />
        <button type="submit" className="bg-red-500 text-white p-2 rounded">
          Delete Car
        </button>
      </form>
      </div>
  );
};

export default DeleteCar;
