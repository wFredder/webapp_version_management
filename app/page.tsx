import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="py-12">
        <h2 className="text-2xl font-bold">Contáctanos</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" name="message" rows={4} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-medium text-white hover:bg-gray-700">Enviar</button>
        </form>
      </section>
    </div>
  );
}
