import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Importando ícones do react-icons
import Link from 'next/link'; // Importando o componente Link do Next.js

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-600">
          <Link href="/">
            <img src="/flow-icone.ico" alt="Flow Icon" className="w-90 h-8 cursor-pointer" />
          </Link>
        </div>
        <div className="flex space-x-6 items-center">
          <Link href="/cart">
            <button className="text-orange-600 flex items-center space-x-2">
              <FaShoppingCart className="text-lg" />
              <span>Carrinho</span>
            </button>
          </Link>
          <Link href="/">
            <button className="text-orange-600 flex items-center space-x-2">
              <FaUser className="text-lg" />
              <span>Entrar</span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
