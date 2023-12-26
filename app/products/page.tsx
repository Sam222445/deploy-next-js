"use client"
import { useState } from 'react'

const Products: React.FC = () => {

  // Utilizando el Hook useState para manejar el estado
  const [count, setCount] = useState<number>(0)
  const [color, setColor] = useState<string>('black')

  // Generando un color aleatorio
  const handleClick = (): void => {
    setCount(count + 1);

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  }

  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <p>Has hecho clic <span className='font-bold' style={{color: color}}>{count}</span> veces</p>
      <button className='p-2 mt-2 bg-blue-800 rounded-lg text-white' onClick={handleClick}>
        Haz clic en mí
      </button>
    </div>
  );
}

export default Products