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
    </div>
  );
}