'use client'
import { ChangeEvent, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, a una API
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center py-4">
        <Link href="/" className="font-bold text-xl">Mi Sitio Web</Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/about">Sobre Nosotros</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>

      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Bienvenido a mi sitio web</h1>
        <p className="text-lg mt-4">Descubre más sobre nosotros.</p>
      </header>

      <section className="py-12">
        <h2 className="text-2xl font-bold">Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold">Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-medium text-white hover:bg-gray-700">Enviar</button>
        </form>
      </section>
    </div>
  );
}